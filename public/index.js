import { randomNumber } from "./assets/utils.js";
import { canvas } from "./assets/components/canvas.js";
import { Ball } from "./assets/components/ball.js";
import { Loop } from "./assets/components/loop.js";
let balls = [];
new Loop(balls);
canvas.addEventListener("click", function (event) {
    const deltaX = randomNumber(-1, 1);
    const deltaY = 100;
    const radius = randomNumber(10, 15);
    const color = "rgb(" + randomNumber(0, 255) + ", " + randomNumber(0, 255) + ", " + randomNumber(0, 255) + ")";
    if (balls.length < 15) {
        const ball = new Ball(event.x, event.y, deltaX, deltaY, radius, color);
        console.log(ball);
        balls.push(ball);
    }
    else {
        balls.length = 0;
    }
});
