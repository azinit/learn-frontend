import { getContext, getCanvas } from "../canvas";

const { PI } = Math;

// https://www.youtube.com/watch?v=XYgcNVwHUdg&t=1712s
// Хауди Хо - Рисовальняэ

const canv = getCanvas();
const ctx = getContext();
let isMouseDown = false;


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
})
canv.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const { offsetX, offsetY } = event;
        ctx.fillStyle = randomColor();
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, 5, 0, PI * 2);
        ctx.fill();
    }
})