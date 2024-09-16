import { Employee } from "./employee";
import { Developer } from "./developer";
import { Manager } from "./manager";

const employees: Employee[] = [
    new Developer('Alice', 30, 8000),
    new Developer('Bob', 25, 7500),
    new Manager('Charlie', 40, 3000),
    new Manager('Diana', 35, 9500)
];

let totalAnnualBonus = employees.reduce((total, employee) => total + employee.getAnnualBonus(), 0);

console.log(`Total Annual Bonus for all employees: $${totalAnnualBonus}`);

employees.forEach(employee => employee.pay());