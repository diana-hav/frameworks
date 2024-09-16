import { Shape } from "./shape";

export class Triangle implements Shape {
    private a: number;
    private b: number;
    private c: number;
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getArea(): number {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    getPerimeter(): number {
      return this.a + this.b + this.c;
    }
  
    scale(factor: number): void {
      this.a *= factor;
      this.b *= factor;
      this.c *= factor;
    }
  }
  