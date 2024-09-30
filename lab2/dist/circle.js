"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=circle.js.map