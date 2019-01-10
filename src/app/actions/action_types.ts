import { ToolType } from "../../core/tool_type";

export const ActionTypes = {
    VIEWPORT: {
        CHANGE_SIZE: "VIEWPORT/CHANGE_SIZE",
        CHANGE_MOUSE_POSITION: "VIEWPORT/CHANGE_MOUSE_POSITION",
        CHANGE_OFFSET: "VIEWPORT/CHANGE_OFFSET",
    },
    KEYS: {
        CHANGE_KEY: "KEYS/CHANGE_KEY",
    },
    TOOL: {
        CHANGE_TYPE: "TOOL/CHANGE_TYPE",
        [ToolType.HAND]: {
            CHANGE_MOUSE_OFFSET: "TOOL/HAND/CHANGE_MOUSE_OFFSET",
        },
    },
};
