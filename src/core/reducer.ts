import { Action } from "./action";

export interface ReducerHandlers<S, A extends Action<any>> {
    [type: string]: (state: S, action: A) => S;
}
export const handleActions = <S, A extends Action<any>>(initialState: S, handlers: ReducerHandlers<S, A>) =>
    (state = initialState, action: A): S => {
        if(state && handlers[action.type]) {
            return handlers[action.type](state, action);
        } else {
            return initialState;
        }
    };