export declare abstract class Car {
    protected model: string;
    protected year: number;
    private insuranceNumber?;
    constructor(model: string, year: number, insuranceNumber?: number);
    getInsuranceNumber(): number | undefined;
    abstract displayCarInfo(): void;
}
//# sourceMappingURL=car.d.ts.map