import { Dictionary } from "../../../core/dictionary";
import { ILayer, makeEmptyLayer } from "../../../core/layer";
import { handleActions } from "../../../core/reducer";
import { makeVector } from "../../../core/vector";
import { makeEmptyImage } from "../../../core/image";
import { ActionTypes } from "../../actions/action_types";
import { IMergeImageToCurrentLayerAction } from "../../actions/layers";

export type ILayersState = {
    current: number;
    list: ILayer[];
};

const initialState: ILayersState = {
    current: 1,
    list: [
        makeEmptyLayer(makeVector(32, 32)),
        makeEmptyLayer(makeVector(32, 32)),
        makeEmptyLayer(makeVector(32, 32)),
    ],
};

export const layersReducer = handleActions(initialState, {
    [ActionTypes.LAYERS.MERGE_IMAGE_TO_CURRENT_LAYER]: (state: ILayersState, action: IMergeImageToCurrentLayerAction): ILayersState => {
        state.list[state.current].img.ctx.drawImage(action.payload.canvas, 0, 0);
        return {...state, list: [...state.list]};
    },
});
