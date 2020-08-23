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

const renderPath2D = () => {
    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);
    rectangle.moveTo(30, 30);
    rectangle.arc(30, 30, 10, 0, Math.PI * 2, true);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
}

const renderGradient = () => {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                Math.floor(255 - 42.5 * j) + ', 0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}

const renderText = () => {
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'green';
    ctx.fillText('Sample String', 5, 30);
}

const renderFillRules = () => {
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
    ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
    ctx.fill('evenodd');
}

const canvasState = () => {
    ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
    ctx.save();                  // Save the default state

    ctx.fillStyle = '#09F';      // Make changes to the settings
    ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

    ctx.save();                  // Save the current state
    ctx.fillStyle = '#FFF';      // Make changes to the settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

    ctx.restore();               // Restore previous state
    ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

    ctx.restore();               // Restore original state
    ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings
}

canvasState();
document.body.appendChild(canvas);
