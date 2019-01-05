import { ActionTypes } from "./action_types";
import { IVector } from "../../core/vector";

export const changeViewportSize = (size: IVector) => ({
    type: ActionTypes.Viewport.CHANGE_SIZE,
    payload: size,   
});

export const changeViewportMousePosition = (position: IVector | undefined) => ({
    type: ActionTypes.Viewport.CHANGE_MOUSE_POSITION,
    payload: position,
});
