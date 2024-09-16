import { Car } from "./car";

export class Coupe extends Car {
    private engineType: string;

    constructor(model: string, year: number, engineType: string, insuranceNumber?: number) {
        super(model, year, insuranceNumber);
        this.engineType = engineType;
    }

    public displayCarInfo(): void {
        console.log(`Coupe Model: ${this.model}, Year: ${this.year}, Engine Type: ${this.engineType}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}