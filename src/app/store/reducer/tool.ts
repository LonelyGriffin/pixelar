import { ToolType } from "../../../core/tool_type";
import { handleActions } from "../../../core/reducer";
import { IVector } from "../../../core/vector";
import { ActionTypes } from "../../actions/action_types";
import { IChangeHandStartMousePositionAction, IChangeToolTypeAction } from "../../actions/tool";

export type IToolState = Readonly<{
    type: ToolType;
    [ToolType.HAND]: Readonly<{
        // rename to startMousePosition
        startMousePosition?: IVector; // start mouse position at viewport
        startViewportOffset?: IVector;
    }>;
}>

const initialState: IToolState = {
    type: ToolType.HAND,
    [ToolType.HAND]: {}
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
        return state;
    },
});
