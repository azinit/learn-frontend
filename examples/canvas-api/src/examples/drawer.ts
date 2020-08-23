import { getContext } from "../canvas";
// https://www.youtube.com/watch?v=XYgcNVwHUdg&t=1712s
// Хауди Хо - Рисовальняэ

const ctx = getContext();


const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);
}

const randomInt = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let x = 0;
let y = 0;
setInterval(() => {
    clearCanvas();
    ctx.fillStyle = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
    ctx.fillRect(x, y, 100, 100);
    x = (x + 10) % 800
    y = (y + 2) % 800
}, 10)

