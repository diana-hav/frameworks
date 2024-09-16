import { Car } from "./car";

export class SUV extends Car {
    protected allWheelDrive: boolean;

    constructor(model: string, year: number, allWheelDrive: boolean, insuranceNumber?: number) {
        super(model, year, insuranceNumber);
        this.allWheelDrive = allWheelDrive;
    }

    public displayCarInfo(): void {
        console.log(`SUV Model: ${this.model}, Year: ${this.year}, AWD: ${this.allWheelDrive}, Insurance Number: ${this.getInsuranceNumber()}`);
    }
}