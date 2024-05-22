export interface BallPattern {
    x: number,
    y: number,
    deltaX: number,
    deltaY: number,
    radius: number,
    color: string,
    update(correction: number): void,
    draw(context:HTMLCanvasElement): void
}