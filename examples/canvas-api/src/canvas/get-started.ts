const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

// ctx.strokeRect(0, 0, 30, 60);

// ctx.clearRect(20, 20, 10, 10);

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(100, 100);
ctx.fill();

document.body.appendChild(canvas);