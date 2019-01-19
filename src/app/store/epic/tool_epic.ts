import { ActionsObservable, StateObservable, Epic } from "redux-observable";
import { changeViewportMousePosition, IChangeViewportMousePositionAction, changeViewportOffset } from "../../actions/viewport";
import { changeKey, IChangeKeyAction } from "../../actions/keys";
import { ActionTypes } from "../../actions/action_types";
import { IRootState } from "../../store/reducer";
import { ToolType } from "../../../core/tool_type";
import { switchMap, filter, map, startWith, tap, withLatestFrom } from "rxjs/operators";
import { Action } from "redux";
import { empty, Observable, merge, of, combineLatest } from "rxjs";
import { KeyTypes } from "../../../core/keys";
import { startHandDragging, changeToolType } from "../../actions/tool";
import { vectorSum, vectorSub, makeVector, IVector, vectorX, vectorY } from "../../../core/vector";
import { mergeImageToCurrentLayer } from "../../actions/layers";
import { makeEmptyImage } from "../../../core/image";
import { viewportToImagePosition } from "../../utils/viewport_to_image_position";

const INITIAL_TOOL_TYPE = ToolType.HAND;



export const toolEpic = (action$: ActionsObservable<Action<any>>, state$: StateObservable<IRootState>) => {
    return action$.ofType<Action<any>>(
        ActionTypes.TOOL.CHANGE_TYPE,
    ).pipe(
        switchMap(action => toolEpicActionMap[state$.value.tool.type](action$, state$)),
        startWith(changeToolType(INITIAL_TOOL_TYPE))
    )
}
    

type IToolEpicActionMap = {
    [toolType in ToolType]: (action$: ActionsObservable<Action<any>>, state$: StateObservable<IRootState>)  => Observable<Action>;
}

const toolEpicActionMap: IToolEpicActionMap = {
    [ToolType.HAND]: (action$: ActionsObservable<Action<any>>, state$: StateObservable<IRootState>) => merge(
        action$.ofType<IChangeKeyAction>(ActionTypes.KEYS.CHANGE_KEY).pipe(
            filter(action => action.payload.keyType === KeyTypes.MOUSE_LEFT && action.payload.value),
            map(() => startHandDragging(
                state$.value.viewport.mousePosition || makeVector(0, 0),
                state$.value.viewport.offset,
            )),
        ),
        action$.ofType<IChangeViewportMousePositionAction>(ActionTypes.VIEWPORT.CHANGE_MOUSE_POSITION).pipe(
            filter(() => state$.value.keys.MOUSE_LEFT),
            switchMap(() => {
                const startMousePosition = state$.value.tool.HAND.startMousePosition;
                const startViewportOffset = state$.value.tool.HAND.startViewportOffset;
                const mousePosition = state$.value.viewport.mousePosition;
                if (startMousePosition && mousePosition && startViewportOffset) {
                    const newViewportOffset = vectorSum(
                        startViewportOffset,
                        vectorSub(startMousePosition, mousePosition)
                    );
                    return of(changeViewportOffset(newViewportOffset))
                } else {
                    return empty();
                }
            }),
        ),
    ),
    [ToolType.PEN]: (action$: ActionsObservable<Action<any>>, state$: StateObservable<IRootState>) => merge(
            action$.ofType<IChangeKeyAction>(ActionTypes.KEYS.CHANGE_KEY).pipe(
                filter(action => action.payload.keyType === KeyTypes.MOUSE_LEFT)
            ),
            action$.ofType<IChangeViewportMousePositionAction>(ActionTypes.VIEWPORT.CHANGE_MOUSE_POSITION)
        ).pipe(
            filter(() => state$.value.keys[KeyTypes.MOUSE_LEFT]),
            map(() => {
                const mousePosition = state$.value.viewport.mousePosition; 
                if (mousePosition) {
                    const imagePos = viewportToImagePosition(
                        mousePosition,
                        state$.value.viewport.offset,
                        state$.value.viewport.scale,
                    );
                    const penSize = state$.value.tool[ToolType.PEN].size;
                    const halfPenSize = Math.floor(penSize / 2);
                    const penPos = vectorSub(
                        makeVector(halfPenSize, halfPenSize),
                        imagePos,
                    );
                    const pixelImg = makeEmptyImage(makeVector(32, 32));
                    pixelImg.ctx.beginPath();
                    pixelImg.ctx.fillStyle = "000000";
                    pixelImg.ctx.fillRect(vectorX(penPos), vectorY(penPos), penSize, penSize);
                    pixelImg.ctx.closePath();
                    pixelImg.ctx.stroke();
                    return mergeImageToCurrentLayer(pixelImg)
                }

                return {
                    type: ""
                }
            }),
        ),
    [ToolType.ERASER]: (action$: ActionsObservable<Action<any>>, state$: StateObservable<IRootState>) => empty(),
};
