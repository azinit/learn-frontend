const canvas = document.createElement("canvas");
canvas.width = 608;
canvas.height = 608;
document.body.appendChild(canvas);

export const getCanvas = () => canvas;
export const getContext = () => canvas.getContext("2d");
