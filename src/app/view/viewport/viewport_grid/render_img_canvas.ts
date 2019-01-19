import { IImage } from "../../../../core/image";
import { IVector, vectorScalarMul, vectorSub, vectorX, vectorY } from "../../../../core/vector";

export const renderImgCanvas = (img: IImage, viewportOffset: IVector, imageSize: IVector, scale:number) => {
    const imgTL = viewportOffset.map(a => a || 0) as IVector;
    const viewedImgSize = vectorScalarMul(imageSize, scale);
  
    const ctx = img.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, img.canvas.width, img.canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(vectorX(imgTL), vectorY(imgTL), vectorX(viewedImgSize), vectorY(viewedImgSize));
    ctx.stroke();
    ctx.restore();
}