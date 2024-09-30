"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const employee_1 = require("./employee");
class Developer extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.bonus = 0.1;
    }
    getAnnualBonus() {
        return this.salary * this.bonus;
    }
}
exports.Developer = Developer;
//# sourceMappingURL=developer.js.map