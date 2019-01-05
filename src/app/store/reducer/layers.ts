import { Dictionary } from "../../../core/dictionary";
import { ILayer, makeEmptyLayer } from "../../../core/layer";
import { handleActions } from "../../../core/reducer";
import { makeVector } from "../../../core/vector";

export type ILayersState = {
    current?: number;
    list: ILayer[];
};

const initialState: ILayersState = {
    current: 0,
    list: [makeEmptyLayer(makeVector(32, 32))],
};

export const layersReducer = handleActions(initialState, {});
