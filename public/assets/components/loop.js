import { canvas, context } from "../components/canvas.js";
export class Loop {
    constructor(balls) {
        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.animate = this.animate.bind(this);
        this.animate();
    }
    animate(currentTime = 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(this.animate);
        this.deltaTime = currentTime - this.lastUpdate;
        //this.balls.forEach(ball=>ball.update(this.deltaTime/1000))
        this.lastUpdate = currentTime;
    }
}
