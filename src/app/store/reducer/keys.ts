import { KeyTypes } from "../../../core/keys";
import { handleActions } from "../../../core/reducer";
import { ActionTypes } from "../../actions/action_types";
import { IChangeKeyAction } from "../../actions/keys";

export type KeysState = {
    [key in KeyTypes]: boolean;
};

const initialState: KeysState = {
    [KeyTypes.MOUSE_LEFT]: false,
};

export const keysReducer = handleActions(initialState, {
    [ActionTypes.KEYS.CHANGE_KEY]: (state: KeysState, action: IChangeKeyAction) => {
        return {
            ...state,
            [action.payload.keyType]: action.payload.value, 
        }
    }
});
