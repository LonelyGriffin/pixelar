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

interface IDragAndDropContextProps {
    droppableGetters: DroppableGetter[];
    currentDraggableEntity?: DraggableGetter;
}

interface IDragAndDropContextMethods {
    registerDroppableGetter(getter: DroppableGetter): void;
    unregisterDroppableGetter(getter: DroppableGetter): void;
    setDraggableGetter(getter: DraggableGetter): void;
    resetDraggableGetter(getter: DraggableGetter): void;
}

export type IDragAndDropContextValue = IDragAndDropContextProps & IDragAndDropContextMethods;

const DragAndDropContext = React.createContext<IDragAndDropContextValue>({
    registerDroppableGetter: () => {},
    unregisterDroppableGetter: () => {},
    setDraggableGetter: () => {},
    resetDraggableGetter: () => {},
    droppableGetters: [],
});

export const DragAndDropConsumer = DragAndDropContext.Consumer;

export class DragAndDropProvider extends Component<{}, IDragAndDropContextValue> {
    constructor(props: {}) {
        super(props);

        this.state = {
            registerDroppableGetter: () => {},
            unregisterDroppableGetter: () => {},
            setDraggableGetter: () => {},
            resetDraggableGetter: () => {},
            droppableGetters: [],
        }
    }
}