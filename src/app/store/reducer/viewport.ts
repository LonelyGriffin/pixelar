import { IVector, makeVector } from "../../../core/vector";
import { handleActions } from "../../../core/reducer";
import { ActionTypes } from "../../actions/action_types";
import { IChangeViewportSizeAction, IChangeViewportMousePositionAction, IChangeViewportOffsetAction } from "../../actions/viewport";

export type IViewportState = Readonly<{
    mousePosition?: IVector; // позиция курсора относительно пикселей вьюпорта
    offset: IVector;
    size: IVector; // размер viewport в пикселях    
    scale: number; // размер отображаемого пикселя
}>;

const initialState: IViewportState = {
    mousePosition: undefined,
    offset: makeVector(10, 10),
    size: makeVector(0, 0),
    scale: 20
}

export const viewportReducer = handleActions(initialState, {
    [ActionTypes.VIEWPORT.CHANGE_SIZE]: (state: IViewportState, action: IChangeViewportSizeAction): IViewportState => {
        return {...state, size: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_MOUSE_POSITION]: (state: IViewportState, action: IChangeViewportMousePositionAction): IViewportState => {
        return {...state, mousePosition: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_OFFSET]: (state: IViewportState, action: IChangeViewportOffsetAction): IViewportState => {
        return {...state, offset: action.payload};
    },
});
