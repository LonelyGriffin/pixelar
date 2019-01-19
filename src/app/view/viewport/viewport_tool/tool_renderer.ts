import { IToolState } from "../../../store/reducer/tool";
import { IImage, clearImage } from "../../../../core/image";
import { IViewportState } from "../../../store/reducer/viewport";
import { ToolType } from "../../../../core/tool_type";
import { viewportToImagePosition } from "../../../utils/viewport_to_image_position";
import { vectorScalarDiv, vectorSub, makeVector, vectorScalarMul, vectorX, vectorY, vectorSum } from "../../../../core/vector";

export type IToolRenderer = (toolState: IToolState, viewportState: IViewportState, dstImg: IImage) => void;

export const dumpToolRenderer: IToolRenderer = () => {};

const ToolRenderersMap = {
    [ToolType.HAND]: dumpToolRenderer,
    [ToolType.PEN]: (toolState: IToolState, viewportState: IViewportState, dstImg: IImage) => {
        const penState = toolState[ToolType.PEN];

        const mousePosition = viewportState.mousePosition; 

        if (mousePosition) {
            const imagePos = viewportToImagePosition(
                mousePosition,
                viewportState.offset,
                viewportState.scale,
            );

            const offsetToCenter = Math.floor(penState.size / 2);

            const toolPos = vectorSum(
                viewportState.offset,
                vectorScalarMul(
                    vectorSub(
                        makeVector(offsetToCenter, offsetToCenter),
                        imagePos,
                    ),
                    viewportState.scale
                ),
            );

            dstImg.ctx.beginPath();
            dstImg.ctx.fillStyle = "#000000";
            dstImg.ctx.fillRect(vectorX(toolPos), vectorY(toolPos), penState.size * viewportState.scale, penState.size * viewportState.scale);
            dstImg.ctx.closePath();
            dstImg.ctx.stroke();
        }     
    },
    [ToolType.ERASER]: (toolState: IToolState, viewportState: IViewportState, dstImg: IImage) => {
        const eraserState = toolState[ToolType.ERASER];

        const mousePosition = viewportState.mousePosition; 

        if (mousePosition) {
            const imagePos = viewportToImagePosition(
                mousePosition,
                viewportState.offset,
                viewportState.scale,
            );

            const offsetToCenter = Math.floor(eraserState.size / 2);

            const toolPos = vectorSum(
                viewportState.offset,
                vectorScalarMul(
                    vectorSub(
                        makeVector(offsetToCenter, offsetToCenter),
                        imagePos,
                    ),
                    viewportState.scale
                ),
            );

            dstImg.ctx.beginPath();
            dstImg.ctx.fillStyle = "#ffffff";
            dstImg.ctx.fillRect(vectorX(toolPos), vectorY(toolPos), eraserState.size * viewportState.scale, eraserState.size * viewportState.scale);
            dstImg.ctx.closePath();
            dstImg.ctx.stroke();
        }     
    },
}

export const createToolRenderer = (type: ToolType): IToolRenderer => ToolRenderersMap[type];
