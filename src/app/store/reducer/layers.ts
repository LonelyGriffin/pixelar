import { Dictionary } from "../../../core/dictionary";
import { ILayer, makeEmptyLayer } from "../../../core/layer";
import { handleActions } from "../../../core/reducer";
import { makeVector } from "../../../core/vector";
import { makeEmptyImage } from "../../../core/image";

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

const pixelImg = makeEmptyImage(makeVector(1, 1));
pixelImg.ctx.beginPath();
pixelImg.ctx.fillStyle = "000000";
pixelImg.ctx.fillRect(0, 0, 1, 1);
pixelImg.ctx.closePath();
pixelImg.ctx.stroke();

initialState.list[0].img.ctx.drawImage(pixelImg.canvas, 1, 1);
initialState.list[1].img.ctx.drawImage(pixelImg.canvas, 2, 2);
initialState.list[2].img.ctx.drawImage(pixelImg.canvas, 3, 3);

export const layersReducer = handleActions(initialState, {});
