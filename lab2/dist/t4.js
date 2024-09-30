"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const developer_1 = require("./developer");
const manager_1 = require("./manager");
const employees = [
    new developer_1.Developer('Alice', 30, 8000),
    new developer_1.Developer('Bob', 25, 7500),
    new manager_1.Manager('Charlie', 40, 3000),
    new manager_1.Manager('Diana', 35, 9500)
];
let totalAnnualBonus = employees.reduce((total, employee) => total + employee.getAnnualBonus(), 0);
console.log(`Total Annual Bonus for all employees: $${totalAnnualBonus}`);
employees.forEach(employee => employee.pay());
//# sourceMappingURL=t4.js.map