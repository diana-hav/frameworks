"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const employee_1 = require("./employee");
class Manager extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.bonus = 0.2;
    }
    getAnnualBonus() {
        return this.salary * this.bonus;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map