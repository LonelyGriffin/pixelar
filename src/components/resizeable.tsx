import * as React from "react";
import { IVector, makeVector } from "../core/vector";

interface IProps {
    children?: React.ReactNode;
    onResize?: (size: IVector) => void;
    handleInitResizeEvent?: boolean;
    timerInterval?: number;
    [props: string]: any;
}

export class Resizeable extends React.PureComponent<IProps> {
    private ref: React.RefObject<HTMLDivElement>
    private timerId: any;
    private width = 0;
    private height = 0;

    constructor(props: IProps) {
        super(props);

        this.ref = React.createRef();
    }

    public componentDidMount() {
        if (this.props.handleInitResizeEvent) {
            this.handleResize();
        }

        this.timerId = setInterval(() => this.handleResize(), this.props.timerInterval || 200);
    }

    public componentWillUnmount() {
        clearInterval(this.timerId);
    }

    public render() {
        const elementProps = {...this.props}

        delete elementProps.onResize;
        
        return (
            <div ref={this.ref} {...elementProps}>
                {this.props.children}
            </div>
        )
    }

    private handleResize() {
        if(this.props.onResize && this.ref.current) {
            const newWidth = this.ref.current.clientWidth; 
            const newHeight = this.ref.current.clientHeight;
            if (this.width !== newWidth || this.height !== newHeight) {
                this.width = newWidth;
                this.height = newHeight;
                this.props.onResize(makeVector(newWidth, newHeight));
            }
        }
    }
}