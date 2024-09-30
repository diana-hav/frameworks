"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, years, salary) {
        this.name = name;
        this.years = years;
        this.salary = salary;
    }
    pay() {
        console.log(`${this.name} has been paid $${this.salary + this.getAnnualBonus()}`);
    }
}
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map