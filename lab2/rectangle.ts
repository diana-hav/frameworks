import { Shape } from "./shape";

export class Rectangle implements Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    scale(factor: number): void {
      this.width *= factor;
      this.height *= factor;
    }
  }
  