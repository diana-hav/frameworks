import { Employee } from "./employee";

export class Manager extends Employee {

    private bonus: number = 0.2;

    getAnnualBonus(): number {
        return this.salary * this.bonus;
    }
}