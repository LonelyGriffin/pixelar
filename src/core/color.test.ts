import { makeHashColorByParts } from "./color";

describe('model', () => {
    describe('color', () => {
        describe('HashColorByParts()', () => {
            it('RGB to HASH', () => {
                const r = 34;
                const g = 54;
                const b = 205;

                const expected = '2236cd';
                const actual = makeHashColorByParts(r, g, b);

                expect(actual).toEqual(expected);
            });
            it('RGBA to HASH', () => {
                const r = 34;
                const g = 54;
                const b = 205;
                const a = 0.5;

                const expected = '2236cd7f';
                const actual = makeHashColorByParts(r, g, b, a);

                expect(actual).toEqual(expected);
            });
            it('Should not reduce the hash for a part of the color to one character', () => {
                const r = 0;
                const g = 8;
                const b = 10;
                const a = 0;

                const expected = '00080a00'; // а не 08a0
                const actual = makeHashColorByParts(r, g, b, a);

                expect(actual).toEqual(expected);
            });
            it('Should not consider transparency if it is equal to 1', () => {
                const r = 34;
                const g = 54;
                const b = 205;
                const a = 1;

                const expected = '2236cd';
                const actual = makeHashColorByParts(r, g, b, a);

                expect(actual).toEqual(expected);
            });
            it('Should cut off parts of the color if they go beyond 0 - 255 above', () => {
                const r = 255;
                const g = 289;
                const b = 256;
                const a = 5;

                const expected = 'ffffff';
                const actual = makeHashColorByParts(r, g, b, a);

                expect(actual).toEqual(expected);
            });
            it('Should cut off parts of the color if they go beyond 0 - 255 below', () => {
                const r = -255;
                const g = -289;
                const b = 0;
                const a = 0;

                const expected = '00000000';
                const actual = makeHashColorByParts(r, g, b, a);

                expect(actual).toEqual(expected);
            });
        });
    });
});