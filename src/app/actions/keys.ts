import { KeyTypes } from "../../core/keys";
import { ActionTypes } from "./action_types";

export const changeKey = (keyType: KeyTypes, value: boolean) => ({
    type: ActionTypes.KEYS.CHANGE_KEY,
    payload: {
        keyType,
        value,
    },
});

export type IChangeKeyAction = ReturnType<typeof changeKey>;
