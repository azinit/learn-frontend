const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const renderSquads = () => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
    
    ctx.strokeRect(0, 0, 30, 60);
    
    ctx.clearRect(20, 20, 10, 10);
}

const renderTriangle = () => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.fill();
}

const renderSmile = () => {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}

renderSmile();
document.body.appendChild(canvas);