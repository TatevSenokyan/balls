
class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor() {
        this.canvas = <HTMLCanvasElement>document.querySelector("canvas");
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d"); 

        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }
}

const context: CanvasRenderingContext2D = new Canvas().context;
const canvas: HTMLCanvasElement = new Canvas().canvas;

export {
    context,
    canvas
}
