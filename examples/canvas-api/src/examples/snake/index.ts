import { getContext } from "../../canvas";
import { enums, randomInt } from "../../consts";
import { Direction, Point } from "./types";
import { imgFood, imgGround, audDead, audDown, audEat, audLeft, audRight, audUp } from "./assets";
import { GROUND, TILE_SIZE } from "./config";

const { KEYBOARD } = enums;
const ctx = getContext();

class Game {
    private state: {
        snake: Point[];
        food: Point;
        direction: Direction;
        score: number;
    }
    private interval;
    constructor() {
        this.state = {
            snake: [
                { x: 9 * TILE_SIZE, y: 10 * TILE_SIZE },
            ],
            food: null,
            direction: null,
            score: 0,
        }
        document.addEventListener("keydown", (event) => {
            const { keyCode } = event;
            if (keyCode === KEYBOARD.KEY_D && this.state.direction !== "right") {
                this.state.direction = "right";
                audRight.play();
                return;
            }
            if (keyCode === KEYBOARD.KEY_A && this.state.direction !== "left") {
                this.state.direction = "left";
                audLeft.play();
                return;
            }
            if (keyCode === KEYBOARD.KEY_W && this.state.direction !== "up") {
                this.state.direction = "up";
                audUp.play();
                return;
            }
            if (keyCode === KEYBOARD.KEY_S && this.state.direction !== "down") {
                this.state.direction = "down";
                audDown.play();
                return;
            }
        })
        this.seedFood();
        this.interval = setInterval(this.gameLoop, 100);
    }
    seedFood = () => {
        this.state.food = {
            x: Math.floor(Math.random() * (GROUND.x1) + (GROUND.x0)) * TILE_SIZE,
            // x: 5 * TILE_SIZE,
            // y: 5 * TILE_SIZE,
            y: Math.floor(Math.random() * (GROUND.y1) + (GROUND.y0)) * TILE_SIZE,
        }
        document.documentElement
    }
    gameLoop = () => {
        this.render();
        const snakeHead = this.updatePosition();
        this.checkEating(snakeHead);
        this.checkGameOver(snakeHead);
    }
    render = () => {
        const { food, snake, score } = this.state;
        document.documentElement.style.setProperty("--hue", `${randomInt(0, 360)}deg`);
        // renderGround
        ctx.drawImage(imgGround, 0, 0);
        // renderSnake
        snake.forEach(({ x, y }, index) => {
            ctx.fillStyle = (index === 0) ? "green" : "lime";
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
        })
        // renderFood
        ctx.drawImage(imgFood, food.x, food.y);
        // renderScore
        ctx.font = "45px Changa one";
        ctx.fillStyle = "white";
        ctx.fillText(String(score), 2 * TILE_SIZE, 1.6 * TILE_SIZE);

    }
    updatePosition = () => {
        const { direction, snake } = this.state;
        const snakeHead = { ...snake[0] };
        switch (direction) {
            case "down":
                snakeHead.y += TILE_SIZE;
                break;
            case "up":
                snakeHead.y -= TILE_SIZE;
                break;
            case "right":
                snakeHead.x += TILE_SIZE;
                break;
            case "left":
                snakeHead.x -= TILE_SIZE;
                break;
        }
        return snakeHead;
    }
    checkEating = (snakeHead: Point) => {
        const { food, snake } = this.state;
        const isEating = snakeHead.x === food.x && snakeHead.y === food.y;
        if (isEating) {
            this.state.score++;
            this.seedFood();
            audEat.play();
        } else {
            snake.pop();
        }
    }
    checkGameOver = ({ x, y }: Point) => {
        const isOutsideX = GROUND.x0 * TILE_SIZE > x || x > GROUND.x1 * TILE_SIZE;
        const isOutsideY = GROUND.y0 * TILE_SIZE > y || y > GROUND.y1 * TILE_SIZE;
        const isSelfCollision = false;
        if (isOutsideX || isOutsideY || isSelfCollision) {
            clearInterval(this.interval);
            audDead.play();
            console.log("Game over", this.state);
        }
        this.state.snake.unshift({ x, y });
    }
}

new Game();