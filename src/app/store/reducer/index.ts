import { IViewportState, viewportReducer } from "./viewport";
import { ILayersState, layersReducer } from "./layers";
import { ImageSetupState, imageSetupReducer } from "./image_setup";
import { combineReducers } from "redux";
import { keysReducer, KeysState } from "./keys";
import { IToolState, toolReducer } from "./tool";

export type IRootState = Readonly<{
    viewport: IViewportState;
    layers: ILayersState;
    imageSetup: ImageSetupState;
    keys: KeysState;
    tool: IToolState;
}>

export const rootReducer = combineReducers<IRootState>({
    viewport: viewportReducer,
    layers: layersReducer,
    imageSetup: imageSetupReducer,
    keys: keysReducer,
    tool: toolReducer,
});
