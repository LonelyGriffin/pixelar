import { ToolType } from "../../../core/tool_type";
import { handleActions } from "../../../core/reducer";
import { IVector, makeVector } from "../../../core/vector";
import { ActionTypes } from "../../actions/action_types";
import { IChangeHandStartMousePositionAction, IChangeToolTypeAction } from "../../actions/tool";
import { makeEmptyImage, IImage } from "../../../core/image";

export type IToolState = Readonly<{
    img: IImage;
    type: ToolType;
    [ToolType.HAND]: Readonly<{
        // rename to startMousePosition
        startMousePosition?: IVector; // start mouse position at viewport
        startViewportOffset?: IVector;
    }>;
    [ToolType.PEN]: Readonly<{
        size: number;
    }>;
}>

const initialState: IToolState = {
    img: makeEmptyImage(makeVector(0, 0)),
    type: ToolType.HAND,
    [ToolType.HAND]: {},
    [ToolType.PEN]: {
        size: 1,
    },
}

export const toolReducer = handleActions(initialState, {
    [ActionTypes.TOOL.HAND.CHANGE_MOUSE_OFFSET]: (state: IToolState, action: IChangeHandStartMousePositionAction): IToolState => {
        return {
            ...state,
            [ToolType.HAND]: {
                ...state.HAND,
                startMousePosition: action.payload.mousePosition,
                startViewportOffset: action.payload.viewportOffset,
            },
        };
    },
    [ActionTypes.TOOL.CHANGE_TYPE]: (state: IToolState, action: IChangeToolTypeAction): IToolState => {
        return {...state, type: action.payload};
    },
});
