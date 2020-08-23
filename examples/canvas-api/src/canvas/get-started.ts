const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 200, 100);

document.body.appendChild(canvas);