export declare abstract class Employee {
    protected name: string;
    protected years: number;
    protected salary: number;
    constructor(name: string, years: number, salary: number);
    abstract getAnnualBonus(): number;
    pay(): void;
}
//# sourceMappingURL=employee.d.ts.map