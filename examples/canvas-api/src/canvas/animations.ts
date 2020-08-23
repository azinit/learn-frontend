const canvas_ani = document.createElement("canvas");
const ctx_ani = canvas_ani.getContext("2d");

let sun = new Image();
let moon = new Image();
let earth = new Image();
function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx_ani.globalCompositeOperation = 'destination-over';
    ctx_ani.clearRect(0, 0, 300, 300); // clear canvas

    ctx_ani.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx_ani.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx_ani.save();
    ctx_ani.translate(150, 150);

    // Earth
    let time = new Date();
    ctx_ani.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx_ani.translate(105, 0);
    ctx_ani.fillRect(0, -12, 40, 24); // Shadow
    ctx_ani.drawImage(earth, -12, -12);

    // Moon
    ctx_ani.save();
    ctx_ani.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx_ani.translate(0, 28.5);
    ctx_ani.drawImage(moon, -3.5, -3.5);
    ctx_ani.restore();

    ctx_ani.restore();

    ctx_ani.beginPath();
    ctx_ani.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx_ani.stroke();

    ctx_ani.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();

document.body.appendChild(canvas_ani);
