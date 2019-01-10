import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epic";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic as any);
