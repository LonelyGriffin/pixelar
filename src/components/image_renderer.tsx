import { IImage } from "../core/image";
import * as React from "react";
import { IVector, vectorY, vectorX } from "../core/vector";

export interface ImageRendererProps {
    img: IImage;
    className?:string;
}

export class ImageRenderer extends React.Component<ImageRendererProps> {
    private ref: React.RefObject<any>;
    private ctx?: CanvasRenderingContext2D;
    constructor(props: ImageRendererProps) {
        super(props);
        this.ref = React.createRef();
    }
    public componentDidMount() {
        this.ctx = this.ref.current.getContext('2d');
        if (this.ctx) {
            this.renderImage(this.ctx, this.props.img);
        }
    }
    public componentDidUpdate() {
        if(this.ctx) {
            this.renderImage(this.ctx, this.props.img);
        }
    }
    public render() {
        const {img, className} = this.props;

        return (
            <canvas
                ref={this.ref}
                height={img.canvas.height}
                width={img.canvas.width}
                className={className}
            />
        );
    }
    private renderImage(ctx: CanvasRenderingContext2D, img: IImage) {
        
        if (img.canvas.width && img.canvas.height) {
            ctx.drawImage(img.canvas, 0, 0, img.canvas.width, img.canvas.height);
        }
    }
}