import shortid from 'shortid';
import { clamp } from './math';

export interface IColor {
    id: string;
    name: string;
    R: number;
    G: number;
    B: number;
    a: number;
}

export const makeColor = (r: number, g: number, b: number, a: number = 1, name?: string): IColor => ({
    id: shortid.generate(),
    name: name || makeHashColorByParts(r, g, b, a),
    R: r,
    G: g,
    B: b,
    a,
});

export const makeHashColor = (color: IColor): string => makeHashColorByParts(color.R, color.G, color.B, color.a);

const clampColorPart = (part: number) => clamp(part, 0, 255);
const toTwoSymbols = (part: string) => {
    const cutPart = part.substring(0, 2);
    return cutPart.length === 2 ? cutPart : `0${cutPart}`;
};

export const makeHashColorByParts = (r: number, g: number, b: number, a: number = 1): string => {
    const rHash = toTwoSymbols(clampColorPart(r).toString(16)); 
    const gHash = toTwoSymbols(clampColorPart(g).toString(16)); 
    const bHash = toTwoSymbols(clampColorPart(b).toString(16));
    const clampedA = clamp(a, 0, 1);
    const aHash = clampedA !== 1 ? toTwoSymbols((clampedA * 255).toString(16)) : '';
    return `${rHash}${gHash}${bHash}${aHash}`;
};