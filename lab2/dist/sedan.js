"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sedan = void 0;
const car_1 = require("./car");
class Sedan extends car_1.Car {
    constructor(model, year, numberOfDoors, insuranceNumber) {
        super(model, year, insuranceNumber);
        this.numberOfDoors = numberOfDoors;
    }
    displayCarInfo() {
        console.log(`Sedan Model: ${this.model}, Year: ${this.year}, Doors: ${this.numberOfDoors}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}
exports.Sedan = Sedan;
//# sourceMappingURL=sedan.js.map