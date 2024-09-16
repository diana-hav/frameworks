import { Car } from "./car";

export class Sedan extends Car {
    private numberOfDoors: number;

    constructor(model: string, year: number, numberOfDoors: number, insuranceNumber?: number) {
        super(model, year, insuranceNumber);
        this.numberOfDoors = numberOfDoors;
    }

    public displayCarInfo(): void {
        console.log(`Sedan Model: ${this.model}, Year: ${this.year}, Doors: ${this.numberOfDoors}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}