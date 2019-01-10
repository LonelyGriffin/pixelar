import { combineEpics } from "redux-observable";
import { toolEpic } from "./tool_epic";
import { tap, filter } from "rxjs/operators";

export const rootEpic = combineEpics(
    toolEpic,
);
