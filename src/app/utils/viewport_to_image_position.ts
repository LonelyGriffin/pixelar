import { IVector, vectorFloor, vectorScalarDiv, vectorSub } from "../../core/vector";

export const viewportToImagePosition = (viewportPos: IVector, viewportOffset: IVector, scale: number) => {
    return vectorFloor(
        vectorScalarDiv(
            vectorSub(viewportOffset, viewportPos),
            scale
        ),
    )
}