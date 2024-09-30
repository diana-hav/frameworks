"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUV = void 0;
const car_1 = require("./car");
class SUV extends car_1.Car {
    constructor(model, year, allWheelDrive, insuranceNumber) {
        super(model, year, insuranceNumber);
        this.allWheelDrive = allWheelDrive;
    }
    displayCarInfo() {
        console.log(`SUV Model: ${this.model}, Year: ${this.year}, AWD: ${this.allWheelDrive}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}
exports.SUV = SUV;
//# sourceMappingURL=suv.js.map