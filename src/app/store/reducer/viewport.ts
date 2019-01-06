import { IVector, makeVector } from "../../../core/vector";
import { handleActions } from "../../../core/reducer";
import { ActionTypes } from "../../actions/action_types";
import { changeViewportMousePosition, changeViewportSize } from "../../actions/viewport";

export type IViewportState = Readonly<{
    mousePosition?: IVector; // позиция курсора относительно пикселей вьюпорта
    offset: IVector;
    size: IVector; // размер viewport в пикселях    
    scale: number; // размер отображаемого пикселя
}>;

const initialState: IViewportState = {
    mousePosition: undefined,
    offset: makeVector(0, 0),
    size: makeVector(0, 0),
    scale: 20
}

export const viewportReducer = handleActions(initialState, {
    [ActionTypes.Viewport.CHANGE_SIZE]: (state: IViewportState, action: ReturnType<typeof changeViewportSize>): IViewportState => {
        return {...state, size: action.payload};
    },
    [ActionTypes.Viewport.CHANGE_MOUSE_POSITION]: (state: IViewportState, action: ReturnType<typeof changeViewportMousePosition>): IViewportState => {
        return {...state, mousePosition: action.payload};
    },
});
