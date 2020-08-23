import { getContext } from "../canvas";
// https://www.youtube.com/watch?v=XYgcNVwHUdg&t=1712s
// Хауди Хо - Рисовальняэ

const ctx = getContext();


const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);
}

let x = 0;
let y = 0;
setInterval(() => {
    clearCanvas();
    ctx.fillStyle = 'cyan';
    ctx.fillRect(x, y, 100, 100);
    x++;
    y++;
}, 10)

