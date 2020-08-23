// @ts-ignore
import ImgGround from "./img/ground.png";
// @ts-ignore
import ImgFood from "./img/food.png";
// @ts-ignore
import AudioDead from "./audio/dead.mp3";
// @ts-ignore
import AudioDown from "./audio/down.mp3";
// @ts-ignore
import AudioUp from "./audio/up.mp3";
// @ts-ignore
import AudioLeft from "./audio/right.mp3";
// @ts-ignore
import AudioRight from "./audio/right.mp3";
// @ts-ignore
import AudioEat from "./audio/eat.mp3";

/** images */
const imgGround = new Image();
imgGround.src = ImgGround;

const imgFood = new Image();
imgFood.src = ImgFood;

/** audio */
export const audDead = new Audio(AudioDead);
export const audDown = new Audio(AudioDown);
export const audUp = new Audio(AudioUp);
export const audLeft = new Audio(AudioLeft);
export const audRight = new Audio(AudioRight);
export const audEat = new Audio(AudioEat);

export {
    imgGround,
    imgFood,
}
