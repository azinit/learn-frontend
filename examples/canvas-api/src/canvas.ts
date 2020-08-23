const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas);

export const getCanvas = () => canvas;
export const getContext = () => canvas.getContext("2d");
