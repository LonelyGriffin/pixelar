import shortid from "shortid";
import { IVector, vectorX, vectorY, makeVector } from "./vector";

export interface IImage {
    id: string;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
}

export const setSizeToImage = (img: IImage, size: IVector) => {
    img.canvas.width = vectorX(size);
    img.canvas.height = vectorY(size);
};

export const makeEmptyImage = (size: IVector): IImage => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const img: IImage = {
        id: shortid.generate(),
        canvas,
        ctx,
    };

    setSizeToImage(img, size);

    return  img;
};
