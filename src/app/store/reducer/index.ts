import { IViewportState, viewportReducer } from "./viewport";
import { ILayersState, layersReducer } from "./layers";
import { ImageSetupState, imageSetupReducer } from "./image_setup";
import { combineReducers } from "redux";

export type IRootState = Readonly<{
    viewport: IViewportState;
    layers: ILayersState;
    imageSetup: ImageSetupState;
}>

export const rootReducer = combineReducers<IRootState>({
    viewport: viewportReducer,
    layers: layersReducer,
    imageSetup: imageSetupReducer,
});
