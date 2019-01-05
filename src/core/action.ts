import { Action as ReduxAction } from 'redux';

export type Action<P> = ReduxAction<any> & {
    payload?: P,
}
