import { IImage } from "../../core/image";
import { ActionTypes } from "./action_types";

export const mergeImageToCurrentLayer = (img: IImage) => ({
    type: ActionTypes.LAYERS.MERGE_IMAGE_TO_CURRENT_LAYER,
    payload: img,
});

export type IMergeImageToCurrentLayerAction = ReturnType<typeof mergeImageToCurrentLayer>;
