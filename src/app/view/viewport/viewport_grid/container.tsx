import * as React from "react";
import { renderGrid } from "./render_grid";
import { ImageRenderer } from "../../../../components/image_renderer";
import { IVector } from "../../../../core/vector";
import { IImage, makeEmptyImage, setSizeToImage, clearImage } from "../../../../core/image";
import { renderImgCanvas } from "./render_img_canvas";

interface ViewportGridContainerProps {
    className?:string;
    viewportSize: IVector;
    viewportOffset: IVector;
    scale: number;
    imgSize: IVector;
}

export class ViewportGridContainer extends React.Component<ViewportGridContainerProps> {
    private cachedImage: IImage;

    constructor(props:ViewportGridContainerProps) {
        super(props);

        this.cachedImage = makeEmptyImage(props.viewportSize);
    }

    public componentDidMount() {
        this.updateImage(this.props);
    }

    public componentWillUpdate(nextProps: ViewportGridContainerProps) {
        this.updateImage(nextProps);
    }

    public render() {
        return (
            <ImageRenderer
                className={this.props.className}
                img={this.cachedImage}
            />
        )
    }

    private updateImage(props: ViewportGridContainerProps) {
        clearImage(this.cachedImage);
        setSizeToImage(this.cachedImage, props.viewportSize);
        renderImgCanvas(
            this.cachedImage,
            props.viewportOffset,
            props.imgSize,
            props.scale,
        );
        renderGrid(
            this.cachedImage,
            props.scale,
            props.viewportOffset,
        );
    }
};