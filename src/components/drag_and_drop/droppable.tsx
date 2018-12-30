import React, {Component} from "react";
import {DroppableType} from "./droppable_type";
import {DraggableType} from "./draggable_type";
import {DragAndDropConsumer, IDragAndDropContextValue} from "./drag_and_drop_context";

interface IDroppingState {
    hasOverlap: boolean;
}

interface IProps {
    type: DroppableType;
    relevantDraggableTypes: DraggableType[];
    children: (droppingState: IDroppingState) => JSX.Element;
    onDrop?: (droppingState: IDroppingState) => void;
    lock?: boolean;
}

interface IState {
    hasOverlap: boolean;
}

type IDroppableComponentProps = IProps & IDragAndDropContextValue;

export class DroppableComponent extends Component<IDroppableComponentProps, IState> {
    private ref: React.RefObject<HTMLDivElement> = React.createRef();

    constructor(props: IDroppableComponentProps) {
        super(props);

        this.state = {
            hasOverlap: false,
        };
    }

    public componentDidMount() {
        if (!this.props.lock) {
            this.props.registerDroppableGetter(this.getter);
        }
    }

    public componentDidUpdate(prevProps: IDroppableComponentProps) {
        if (prevProps.lock !== this.props.lock) {
            if (this.props.lock) {
                this.props.unregisterDroppableGetter(this.getter);
            } else {
                this.props.registerDroppableGetter(this.getter);
            }
        }
    }

    public componentWillMount() {
        this.props.unregisterDroppableGetter(this.getter);
    }

    public render() {
        const droppingState = {
            hasOverlap: this.state.hasOverlap,
        };
        return (
            <div ref={this.ref}>
                {this.props.children(droppingState)}
            </div>
        );
    }

    private getter = () => ({
        ref: this.ref,
        type: this.props.type,
        relevantDraggableTypes: this.props.relevantDraggableTypes,
    });
}

export class Droppable extends Component<IProps> {
    private renderComponent = (context: IDragAndDropContextValue) => {
        return (
            <DroppableComponent {...this.props} {...context} />
        );
    };

    public render() {
        return (
            <DragAndDropConsumer>
                {this.renderComponent}
            </DragAndDropConsumer>
        );
    }
}