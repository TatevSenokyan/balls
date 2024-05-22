import { canvas, context } from "../components/canvas.js";
const gravity = 1;
const friction = 0.59;
export class Ball {
    constructor(x, y, deltaX, deltaY, radius, color) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.radius = radius;
        this.color = color;
    }
    update(correction) {
        if (this.y + this.radius + this.deltaY * correction > canvas.height) {
            this.deltaY = -this.deltaY * friction;
        }
        else {
            this.deltaY += gravity;
        }
        if (this.x + this.radius + this.deltaX > canvas.width || this.x - this.radius - this.deltaX <= 0) {
            this.deltaX *= -1;
        }
        this.x += this.deltaX;
        this.y += this.deltaY * correction;
        this.draw();
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }
}
