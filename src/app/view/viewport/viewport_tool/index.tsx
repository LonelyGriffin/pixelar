import React, { Component } from "react";
import { IRootState } from "../../../store/reducer";
import { connect } from "react-redux";
import { IImage, makeEmptyImage, setSizeToImage, clearImage } from "../../../../core/image";
import { makeVector } from "../../../../core/vector";
import { ImageRenderer } from "../../../../components/image_renderer";
import { IToolState } from "../../../store/reducer/tool";
import { IViewportState } from "../../../store/reducer/viewport";
import { IToolRenderer, dumpToolRenderer, createToolRenderer } from "./tool_renderer";

interface IProps {
    toolState: IToolState;
    viewportState: IViewportState;
    className?: string;
}

export class ViewportToolContainer extends Component<IProps> {
    private imgCache: IImage = makeEmptyImage(makeVector(0, 0));
    private renderTool: IToolRenderer = dumpToolRenderer;

    public componentDidMount() {
        this.renderTool = createToolRenderer(this.props.toolState.type);
        setSizeToImage(this.imgCache, this.props.viewportState.size);
        this.renderTool(this.props.toolState, this.props.viewportState, this.imgCache);
    }

    public componentWillUpdate(nextProps: IProps) {
        if (nextProps.toolState.type !== this.props.toolState.type) {
            this.renderTool = createToolRenderer(nextProps.toolState.type);
        }

        if (this.props.viewportState.size !== nextProps.viewportState.size) {
            setSizeToImage(this.imgCache, nextProps.viewportState.size);
        }

        if (
            nextProps.toolState.type !== this.props.toolState.type
            || (nextProps.toolState as any)[nextProps.toolState.type] !== (this.props.toolState as any)[this.props.toolState.type]
            || nextProps.viewportState.mousePosition !== this.props.viewportState.mousePosition
            || nextProps.viewportState.scale !== this.props.viewportState.scale
        ) {
            clearImage(this.imgCache);
            if (nextProps.viewportState.mousePosition) {
                this.renderTool(this.props.toolState, this.props.viewportState, this.imgCache);
            }
        }
    }

    public render() {
        return (
            <ImageRenderer img={this.imgCache} className={this.props.className}/>
        );
    }
}

export const ViewportTool = connect(
    (state: IRootState) => ({
        toolState: state.tool,
        viewportState: state.viewport
    }),
)(ViewportToolContainer);
