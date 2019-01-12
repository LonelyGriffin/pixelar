import React, { Component } from "react";
import { connect } from "react-redux";
import { IImage, makeEmptyImage, getImageSize, clearImage, setSizeToImage } from "../../../../core/image";
import { ILayer } from "../../../../core/layer";
import { makeVector, IVector, vectorScalarMul, vectorX, vectorY } from "../../../../core/vector";
import { IRootState } from "../../../store/reducer";
import { ImageRenderer } from "../../../../components/image_renderer";

interface IProps {
    className?: string;
    currentLayerNumber: number;
    scale: number,
    offset: IVector,
    layers: ILayer[];
    viewportSize: IVector;
    imageSize: IVector;
}

export class ViewportImageContainer extends Component<IProps> {
    private bottomLayersImageCache: IImage = makeEmptyImage(makeVector(0, 0));
    private topLayersImageCache: IImage = makeEmptyImage(makeVector(0, 0));
    private resultImage: IImage = makeEmptyImage(makeVector(0, 0));

    constructor(props:IProps) {
        super(props);

        this.updateCaches(props);
        this.renderResultImage(props);
    }

    public componentWillUpdate(nextProps: IProps) {
        const props = this.props;
        const needUpdateCaches = props.currentLayerNumber !== nextProps.currentLayerNumber
            || props.layers.length !== nextProps.layers.length
            || props.viewportSize !== nextProps.viewportSize
            || props.offset !== nextProps.offset
            || props.imageSize !== nextProps.imageSize;
            
        if(needUpdateCaches) {
            this.updateCaches(nextProps);
        }
        this.renderResultImage(nextProps);
    }

    public render() {
        return (
            <ImageRenderer img={this.resultImage} className={this.props.className} />
        )
    }

    private updateCaches(props:IProps) {
        setSizeToImage(this.bottomLayersImageCache, props.imageSize);
        setSizeToImage(this.topLayersImageCache, props.imageSize);

        clearImage(this.bottomLayersImageCache);
        props.layers
            .slice(0, props.currentLayerNumber)
            .forEach(layer => this.bottomLayersImageCache.ctx.drawImage(layer.img.canvas, 0, 0));

        clearImage(this.topLayersImageCache);
        props.layers
            .slice(props.currentLayerNumber + 1, props.layers.length)
            .map(layer => this.topLayersImageCache.ctx.drawImage(layer.img.canvas, 0, 0));
    }

    private renderResultImage(props: IProps) {
        setSizeToImage(this.resultImage, props.viewportSize);
        // off antialiasing after size changing !!!
        this.resultImage.ctx.imageSmoothingEnabled = false;

        const scaledImgSize = vectorScalarMul(
            props.imageSize,
            props.scale
        );
        const dstX = vectorX(props.offset);
        const dstY = vectorY(props.offset);
        const dstW = vectorX(scaledImgSize);
        const dstH = vectorY(scaledImgSize);
        
        clearImage(this.resultImage);
        this.resultImage.ctx.drawImage(this.bottomLayersImageCache.canvas, dstX, dstY, dstW, dstH)
        this.resultImage.ctx.drawImage(this.props.layers[this.props.currentLayerNumber].img.canvas, dstX, dstY, dstW, dstH);
        this.resultImage.ctx.drawImage(this.topLayersImageCache.canvas, dstX, dstY, dstW, dstH);
    }
}

export const ViewportImage = connect(
    (state:IRootState) => ({
        currentLayerNumber: state.layers.current,
        layers: state.layers.list,
        scale: state.viewport.scale,
        offset: state.viewport.offset,
        viewportSize: state.viewport.size,
        imageSize: state.imageSetup.size,
    })
)(ViewportImageContainer);
