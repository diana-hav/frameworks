import { SUV } from "./suv";
import { Sedan } from "./sedan";
import { Coupe } from "./coupe";

const sedan1 = new Sedan('Toyota Camry', 2023, 4, 123456);
const sedan2 = new Sedan('Honda Accord', 2022, 4);

const suv1 = new SUV('Subaru Outback', 2023, true, 654321);
const suv2 = new SUV('Ford Explorer', 2022, false);

const coupe1 = new Coupe('Chevrolet Camaro', 2023, 'V8', 789012);
const coupe2 = new Coupe('Ford Mustang', 2022, 'V6');

sedan1.displayCarInfo();
sedan2.displayCarInfo();
suv1.displayCarInfo();
suv2.displayCarInfo();
coupe1.displayCarInfo();
coupe2.displayCarInfo();