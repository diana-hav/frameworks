import { Shape } from "./shape";

export class Circle implements Shape {

    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    
    scale(factor: number): void {
        this.radius *= factor;
    }

}