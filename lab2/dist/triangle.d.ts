import { Shape } from "./shape";
export declare class Triangle implements Shape {
    private a;
    private b;
    private c;
    constructor(a: number, b: number, c: number);
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}
//# sourceMappingURL=triangle.d.ts.map