import { ToolType } from "../../../core/tool_type";
import { handleActions } from "../../../core/reducer";

// import { ToolType } from "../model/toolType";
// import { handleActions } from "../utils/reducer";
// import { changeToolType } from 'src/actions/tool';
// import { ActionTypes } from "../actions/action_types";
// import { RootState } from ".";

export type IToolState = Readonly<{
    type: ToolType;
    size: number;
}>

const initialState: IToolState = {
    type: ToolType.Hand,
    size: 1,
}

export const toolReducer = handleActions(initialState, {});
