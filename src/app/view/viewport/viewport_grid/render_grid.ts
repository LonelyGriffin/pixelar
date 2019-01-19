import { vectorX, vectorY, IVector } from "../../../../core/vector";
import { IImage } from "../../../../core/image";

export const renderGrid = (
    img: IImage,
    ceilSize: number,
    offset: IVector,
) => {
    const ctx = img.ctx;
    const imgWidth = img.canvas.width;
    const imgHeight = img.canvas.height;
    const lineOffsetX = vectorX(offset) % ceilSize;
    const lineOffsetY = vectorY(offset) % ceilSize;

    ctx.save()
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "rgba(100,100,100,0.5)";

    for(let x = lineOffsetX; x < imgWidth; x+= ceilSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, imgHeight);
    }

    for(let y = lineOffsetY; y < imgHeight; y+= ceilSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(imgWidth, y);
    }

    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
