import { ActionTypes } from "./action_types";
import { IVector } from "../../core/vector";

export const changeViewportSize = (size: IVector) => ({
    type: ActionTypes.VIEWPORT.CHANGE_SIZE,
    payload: size,   
});

export type IChangeViewportSizeAction = ReturnType<typeof changeViewportSize>;

export const changeViewportMousePosition = (position: IVector | undefined) => ({
    type: ActionTypes.VIEWPORT.CHANGE_MOUSE_POSITION,
    payload: position,
});

export type IChangeViewportMousePositionAction = ReturnType<typeof changeViewportMousePosition>;

export const changeViewportOffset = (offset: IVector) => ({
    type: ActionTypes.VIEWPORT.CHANGE_OFFSET,
    payload: offset,
});

export type IChangeViewportOffsetAction = ReturnType<typeof changeViewportOffset>; 

export const changeViewportScale = (scale: number) => ({
    type: ActionTypes.VIEWPORT.CHANGE_SCALE,
    payload: scale,
});

export type IChangeViewportScale = ReturnType<typeof changeViewportScale>; 

export const changeViewportScaleBy = (scaleOffset: number) => ({
    type: ActionTypes.VIEWPORT.CHANGE_SCALE_BY,
    payload: scaleOffset,
});

export type IChangeViewportScaleBy = ReturnType<typeof changeViewportScaleBy>; 
