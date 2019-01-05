import * as React from "react";
import { renderGrid } from "./render_grid";
import { ImageRenderer } from "../../../../components/image_renderer";
import { IVector } from "../../../../core/vector";
import { IImage, makeEmptyImage, setSizeToImage } from "../../../../core/image";

interface ViewportGridContainerProps {
    className?:string;
    viewportSize: IVector;
    viewportOffset: IVector;
    imageSize: IVector;
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
        setSizeToImage(this.cachedImage, props.viewportSize);

        renderGrid(
            this.cachedImage,
            10,
            props.viewportOffset,
        );

        // this.cachedImage = {...this.cachedImage};
    }
};