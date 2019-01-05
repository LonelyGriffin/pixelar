import {IVector, makeVector} from "./vector";

export type IRectangle = [IVector, IVector];

export const makeRectangle = (top: number, left:number, bottom:number, right:number): IRectangle => ([makeVector(top, left), makeVector(bottom, right)]);
export const rectangleTL = (rect: IRectangle):IVector => rect[0];
export const rectangleBR = (rect: IRectangle):IVector => rect[1];
export const makeRectByBoundary = (boundary: ClientRect | DOMRect): IRectangle => {
    if ("x" in boundary) {
        return makeRectangle(boundary.y, boundary.x, boundary.y + boundary.height, boundary.x + boundary.width);
    } else {
        return makeRectangle(boundary.top, boundary.left, boundary.top + boundary.height, boundary.left + boundary.width);
    }
};
