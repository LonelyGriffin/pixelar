import { IVector, makeVector } from "../../../core/vector";
import { handleActions } from "../../../core/reducer";

export type ImageSetupState = Readonly<{
    size: Readonly<IVector>;
}>;

const initialState: ImageSetupState = {
    size: makeVector(32, 32),
}

export const imageSetupReducer = handleActions(initialState, {});