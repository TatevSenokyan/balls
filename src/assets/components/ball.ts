import { BallPattern } from "../interfaces/balls";
import { canvas, context } from "../components/canvas.js";

const gravity: number = 1;
const friction: number = 0.59;

export class Ball implements BallPattern {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    radius: number;
    color: string

    constructor(x: number, y: number, deltaX: number, deltaY: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.radius = radius;
        this.color = color;
    }

    update(correction: number) {
        if (this.y+this.radius>canvas.height) {
            this.deltaY = -this.deltaY*friction;
        } else {
             this.deltaY += gravity;
        }
 
        if (this.x+this.radius+this.deltaX>canvas.width || this.x - this.radius<=0) {
             this.deltaX *= -1;
 
        }
 
        this.x += this.deltaX;
        this.y += this.deltaY*correction;
        this.draw()
 
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke()
        context.closePath();
    }
}