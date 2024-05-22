
import { randomNumber } from "./assets/utils.js";
import { BallPattern } from "./assets/interfaces/balls";
import { canvas } from "./assets/components/canvas.js";
import { Ball } from "./assets/components/ball.js";
import { Loop } from "./assets/components/loop.js";

const balls: Array<BallPattern> = [];

new Loop(balls);

canvas.addEventListener("click", function(event) {
    const deltaX = randomNumber(-1,1);
    const deltaY = 100;
    const radius = randomNumber(8,20);
    const color = "rgb(" + randomNumber(0, 255) + ", " + randomNumber(0, 255) + ", " + randomNumber(0, 255) + ")";

    const ball = new Ball(event.x, event.y, deltaX, deltaY, radius, color);
    balls.push(ball);
});

