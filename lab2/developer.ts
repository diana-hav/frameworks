import { Employee } from "./employee";

export class Developer extends Employee {

    private bonus: number = 0.1;

    getAnnualBonus(): number {

        return this.salary*this.bonus;
    }
}