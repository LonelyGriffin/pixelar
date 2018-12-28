import * as React from "react";
import {DroppableType} from "./DroppableType";
import {Component, RefObject} from "react";
import {DraggableType} from "./DraggableType";

export interface IDroppableEntity {
    ref: RefObject<HTMLElement>;
    type: DroppableType;
    relevantDraggableTypes: ReadonlyArray<DraggableType>;
}

export type DroppableGetter = () => IDroppableEntity;

export interface IDraggableEntity {
    ref: RefObject<HTMLElement>;
    type: DraggableType;
    relevantDroppableTypes: ReadonlyArray<DroppableType>;
}

export type DraggableGetter = () => IDraggableEntity;

export type IDragAndDropContextValue = {
    droppableGetters: DroppableGetter[];
    currentDraggableGetter?: DraggableGetter;
    overlapDroppableGetter?: DroppableGetter;
    registerDroppableGetter(getter: DroppableGetter): void;
    unregisterDroppableGetter(getter: DroppableGetter): void;
    setDraggableGetter(getter: DraggableGetter): void;
    resetDraggableGetter(): void;
    contextDragHandler(): void;
    contextDropHandler(): void;
};

const DragAndDropContext = React.createContext<IDragAndDropContextValue>({
    droppableGetters: [],
    registerDroppableGetter: () => {},
    unregisterDroppableGetter: () => {},
    setDraggableGetter: () => {},
    resetDraggableGetter: () => {},
    contextDragHandler: () => {},
    contextDropHandler: () => {},
});

export const DragAndDropConsumer = DragAndDropContext.Consumer;
const Provider = DragAndDropContext.Provider;

export class DragAndDropProvider extends Component<{}, IDragAndDropContextValue> {
    constructor(props: {}) {
        super(props);

        this.state = {
            droppableGetters: [],
            registerDroppableGetter: this.registerDroppableGetter,
            unregisterDroppableGetter: this.unregisterDroppableGetter,
            setDraggableGetter: this.setDraggableGetter,
            resetDraggableGetter: this.resetDraggableGetter,
            contextDragHandler: this.contextDragHandler,
            contextDropHandler: this.contextDropHandler,
        }
    }

    private registerDroppableGetter = (getter: DroppableGetter) => {
        this.setState({
            droppableGetters: [...this.state.droppableGetters, getter],
        });
    };
    private unregisterDroppableGetter = (getter: DroppableGetter) => {
        this.setState({
            droppableGetters: this.state.droppableGetters.filter(g => g !== getter),
        });
    };
    private setDraggableGetter = (getter: DraggableGetter) => {
        this.setState({
            currentDraggableGetter: getter,
        });
    };
    private resetDraggableGetter = () => {
        this.setState({
            currentDraggableGetter: undefined,
            overlapDroppableGetter: undefined,
        });
    };

    private contextDragHandler = () => {
        this.updateOverlap();
    };

    private contextDropHandler = () => {

    };

    private updateOverlap = () => {

    };

    public render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}