import {IVector, Vector} from "./vector";

export type IRectangle = [IVector, IVector];

export const Rectangle = (top: number, left:number, bottom:number, right:number): IRectangle => ([Vector(top, left), Vector(bottom, right)]);
export const rectangleTL = (rect: IRectangle):IVector => rect[0];
export const rectangleBR = (rect: IRectangle):IVector => rect[1];
export const RectangleByBoundary = (boundary: ClientRect | DOMRect): IRectangle => {
    if ("x" in boundary) {
        return Rectangle(boundary.y, boundary.x, boundary.y + boundary.height, boundary.x + boundary.width);
    } else {
        return Rectangle(boundary.top, boundary.left, boundary.top + boundary.height, boundary.left + boundary.width);
    }
};
