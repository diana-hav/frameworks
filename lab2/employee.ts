import { Payable } from "./payable"

export abstract class Employee {
    protected name: string;
    protected years: number;
    protected salary: number;

    constructor (name: string, years: number, salary: number) {
        this.name = name;
        this.years = years;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;

    pay(): void {
        console.log(`${this.name} has been paid $${this.salary + this.getAnnualBonus()}`);
    }
}