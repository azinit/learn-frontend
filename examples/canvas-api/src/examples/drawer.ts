import { getContext, getCanvas } from "../canvas";

const { PI } = Math;

// https://www.youtube.com/watch?v=XYgcNVwHUdg&t=1712s
// Хауди Хо - Рисовальняэ

const canv = getCanvas();
const ctx = getContext();
let isMouseDown = false;
let strokeRadius = 10;
ctx.lineWidth = strokeRadius;

const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);
}

const randomInt = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomColor = () => {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}

canv.addEventListener("mousedown", () => {
    isMouseDown = true;
})
canv.addEventListener("mouseup", () => {
    isMouseDown = false;
    // Чтобы линию можно было сбрасывать при рисовании отдельных кусков
    ctx.beginPath();
})

canv.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const { offsetX: x, offsetY: y } = event;
        // Рисуем линию с предыдущей позиции до текущей
        ctx.lineTo(x, y);
        ctx.stroke();
        // Рисуем на конце линий круги, чтобы не было острых перегибов при больших радиусах
        ctx.beginPath();
        ctx.arc(x, y, strokeRadius / 2, 0, PI * 2);
        ctx.fill();
        // Переходим в текущую позицию
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
})