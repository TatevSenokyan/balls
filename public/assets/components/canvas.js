class Canvas {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }
}
const context = new Canvas().context;
const canvas = new Canvas().canvas;
export { context, canvas };
