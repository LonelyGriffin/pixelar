import { ToolType } from "../../core/tool_type";

export const ActionTypes = {
    VIEWPORT: {
        CHANGE_SIZE: "VIEWPORT/CHANGE_SIZE",
        CHANGE_MOUSE_POSITION: "VIEWPORT/CHANGE_MOUSE_POSITION",
        CHANGE_OFFSET: "VIEWPORT/CHANGE_OFFSET",
        CHANGE_SCALE: "VIEWPORT/CHANGE_SCALE",
        CHANGE_SCALE_BY: "VIEWPORT/CHANGE_SCALE_BY",
    },
    KEYS: {
        CHANGE_KEY: "KEYS/CHANGE_KEY",
    },
    TOOL: {
        CHANGE_TYPE: "TOOL/CHANGE_TYPE",
        [ToolType.HAND]: {
            CHANGE_MOUSE_OFFSET: "TOOL/HAND/CHANGE_MOUSE_OFFSET",
        },
        [ToolType.PEN]: {
            CHANGE_SIZE: "TOOL/PEN/CHANGE_SIZE",
        },
        [ToolType.ERASER]: {
            CHANGE_SIZE: "TOOL/ERASER/CHANGE_SIZE",
        },
    },
    LAYERS: {
        MERGE_IMAGE_TO_CURRENT_LAYER: "LAYERS/MERGE_IMAGE_TO_CURRENT_LAYER",
    }
};
