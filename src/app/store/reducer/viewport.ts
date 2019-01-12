import { IVector, makeVector } from "../../../core/vector";
import { handleActions } from "../../../core/reducer";
import { ActionTypes } from "../../actions/action_types";
import { IChangeViewportSizeAction, IChangeViewportMousePositionAction, IChangeViewportOffsetAction, IChangeViewportScale, IChangeViewportScaleBy } from "../../actions/viewport";

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
    [ActionTypes.VIEWPORT.CHANGE_SIZE]: (state: IViewportState, action: IChangeViewportSizeAction): IViewportState => {
        return {...state, size: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_MOUSE_POSITION]: (state: IViewportState, action: IChangeViewportMousePositionAction): IViewportState => {
        return {...state, mousePosition: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_OFFSET]: (state: IViewportState, action: IChangeViewportOffsetAction): IViewportState => {
        return {...state, offset: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_SCALE]: (state: IViewportState, action: IChangeViewportScale): IViewportState => {
        return {...state, scale: action.payload};
    },
    [ActionTypes.VIEWPORT.CHANGE_SCALE_BY]: (state: IViewportState, action: IChangeViewportScaleBy): IViewportState => {
        // TODO: add restrictions and viewport centering by mouse position
        const newScale = state.scale + action.payload;
        if (newScale > 0) {
            return {...state, scale: newScale};
        } else {
            return state;
        }
    },
});
