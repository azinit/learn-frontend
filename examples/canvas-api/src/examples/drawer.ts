import { getContext, getCanvas } from "../canvas";
import { enums } from "../consts";

const { keyboard } = enums;
const { PI } = Math;

// https://www.youtube.com/watch?v=XYgcNVwHUdg&t=1712s
// Хауди Хо - Рисовальняэ

const canv = getCanvas();
const ctx = getContext();
let isMouseDown = false;
let strokeRadius = 10;
let history: Array<any> = [];
ctx.lineWidth = strokeRadius;

const randomInt = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomColor = () => {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}

// Mousedown, mouseup - для вычисления состояния - нажата или не нажата кнопка мыши
canv.addEventListener("mousedown", () => {
    isMouseDown = true;
    history.push("mousedown");
})
canv.addEventListener("mouseup", () => {
    isMouseDown = false;
    // Чтобы линию можно было сбрасывать при рисовании отдельных кусков
    ctx.beginPath();
    history.push("mouseup");
})
// Основной цикл отрисовки 
canv.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const { offsetX: x, offsetY: y } = event;
        // Добавляем в историю координаты
        history.push([x, y]);
        render(x, y);
    }
})
/** Отрисовка согласно координатам */
const render = (x: number, y: number) => {
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

// Хоткеи на действия
document.addEventListener('keydown', (event) => {
    const { keyCode } = event;
    switch (keyCode) {
        case keyboard.KEY_S:
            save();
            break;
        case keyboard.KEY_R:
            history = JSON.parse(localStorage.getItem('drawer-history'));
            clear();
            replay();
            break;
        case keyboard.KEY_C:
            history = [];
            localStorage.setItem('drawer-history', JSON.stringify(history));
            clear()
            break;
    }
})

/** Очищение canvas */
const clear = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);

    ctx.beginPath();
    const color = randomColor();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}
/** Сохранение путей в LS */
const save = () => {
    localStorage.setItem('drawer-history', JSON.stringify(history));
}
/** Воспроизведение рисования */
const replay = () => {
    let index = 0;
    let isMouseDown = false;
    const interval = setInterval(() => {
        // Останавливаем воспроизведение
        if (index === history.length) {
            clearInterval(interval);
            ctx.beginPath();
            return;
        }
        // Воспроизводим шаг
        const step = history[index];
        switch (step) {
            case "mouseup":
                isMouseDown = false;
                ctx.beginPath();
                break;
            case "mousedown":
                isMouseDown = true;
                break;
            default:
                const [x, y] = step as [number, number];
                render(x, y);

        }
        index++;
    }, 10);
}