"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupe = void 0;
const car_1 = require("./car");
class Coupe extends car_1.Car {
    constructor(model, year, engineType, insuranceNumber) {
        super(model, year, insuranceNumber);
        this.engineType = engineType;
    }
    displayCarInfo() {
        console.log(`Coupe Model: ${this.model}, Year: ${this.year}, Engine Type: ${this.engineType}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}
exports.Coupe = Coupe;
//# sourceMappingURL=coupe.js.map