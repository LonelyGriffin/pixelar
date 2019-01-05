import { IVector, makeVector } from "./vector";
import { IImage, makeEmptyImage } from "./image";
import shortid from "shortid";

export interface ILayer {
    id: string;
    name: string;
    offset: IVector;
    img: IImage;
}

export const makeEmptyLayer = (size: IVector): ILayer => ({
    id: shortid.generate(),
    name: "",
    offset: makeVector(0, 0),
    img: makeEmptyImage(size),
});
