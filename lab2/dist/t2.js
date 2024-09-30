"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
const triangle_1 = require("./triangle");
function calculateTotals(shapes) {
    let totalArea = 0;
    let totalPerimeter = 0;
    for (const shape of shapes) {
        totalArea += shape.getArea();
        totalPerimeter += shape.getPerimeter();
    }
    return { totalArea, totalPerimeter };
}
const shapes = [
    new circle_1.Circle(5),
    new rectangle_1.Rectangle(4, 6),
    new triangle_1.Triangle(3, 4, 5)
];
const totals = calculateTotals(shapes);
console.log(`Total Area: ${totals.totalArea}`);
console.log(`Total Perimeter: ${totals.totalPerimeter}`);
//# sourceMappingURL=t2.js.map