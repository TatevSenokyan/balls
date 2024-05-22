import { canvas, context } from "../components/canvas.js";
import { BallPattern } from "../interfaces/balls";

export class Loop {
    deltaTime: number;
    lastUpdate: number;
    balls: Array<BallPattern>

    constructor(balls: Array<BallPattern>) {
      this.deltaTime = 0;
      this.lastUpdate = 0;
      this.balls = balls;

      this.animate = this.animate.bind(this);
      this.animate();
    }
    animate(currentTime:number = 0) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(this.animate);
  
      this.deltaTime = currentTime - this.lastUpdate;
      
      this.balls.forEach(ball=>ball.update(this.deltaTime/1000))
      
      this.lastUpdate = currentTime;
    }
}