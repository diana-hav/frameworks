import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle"
import { Triangle } from "./triangle";

function calculateTotals(shapes: Shape[]): { totalArea: number; totalPerimeter: number } {
    let totalArea = 0;
    let totalPerimeter = 0;
  
    for (const shape of shapes) {
      totalArea += shape.getArea();
      totalPerimeter += shape.getPerimeter();
    }
  
    return { totalArea, totalPerimeter };
  }
  
  const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
  ];
  
  const totals = calculateTotals(shapes);
  console.log(`Total Area: ${totals.totalArea}`);
  console.log(`Total Perimeter: ${totals.totalPerimeter}`);
  