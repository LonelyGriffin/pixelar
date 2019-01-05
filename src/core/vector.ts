export type IVector = [number, number];

export const makeVector = (x: number, y: number):IVector => ([x, y]);
export const vectorX = (v: IVector) => v[0];
export const vectorY = (v: IVector) => v[1];
export const vectorSum = (v1: IVector, v2: IVector): IVector => [v1[0] + v2[0], v1[1] + v2[1]];
export const vectorSub = (v1: IVector, v2: IVector): IVector => [v2[0] - v1[0], v2[1] - v1[1]];
