
import { Action } from "./action";

export interface ReducerHandlers<S, A extends Action<any>> {
    [type: string]: (state: S, action: A) => S;
}
export const handleActions = <S>(initialState: S, handlers: ReducerHandlers<S, any>) =>
    (state = initialState, action: any): S => {
        if(state && handlers[action.type]) {
            return handlers[action.type](state, action);
        } else {
            return state || initialState;
        }
    };