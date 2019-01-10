import { IVector } from "../../core/vector";
import { ActionTypes } from "./action_types";
import { ToolType } from "../../core/tool_type";

export const startHandDragging = (mousePosition: IVector, viewportOffset: IVector) => ({
    type: ActionTypes.TOOL.HAND.CHANGE_MOUSE_OFFSET,
    payload: {
        mousePosition,
        viewportOffset,
    },
});

export type IChangeHandStartMousePositionAction = ReturnType<typeof startHandDragging>; 

export const changeToolType = (toolType: ToolType) => ({
    type: ActionTypes.TOOL.CHANGE_TYPE,
    payload: toolType,
});

export type IChangeToolTypeAction = ReturnType<typeof changeToolType>;
