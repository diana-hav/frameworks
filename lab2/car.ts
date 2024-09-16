export abstract class Car {

    protected model: string;
    protected year: number;
    private insuranceNumber?: number; 

    constructor(model: string, year: number, insuranceNumber?: number) {
        this.model = model;
        this.year = year;
        this.insuranceNumber = insuranceNumber;
    }

    public getInsuranceNumber(): number | undefined {
        return this.insuranceNumber;
    }

    abstract displayCarInfo(): void;
}
