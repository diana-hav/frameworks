"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suv_1 = require("./suv");
const sedan_1 = require("./sedan");
const coupe_1 = require("./coupe");
const sedan1 = new sedan_1.Sedan('Toyota Camry', 2023, 4, 123456);
const sedan2 = new sedan_1.Sedan('Honda Accord', 2022, 4);
const suv1 = new suv_1.SUV('Subaru Outback', 2023, true, 654321);
const suv2 = new suv_1.SUV('Ford Explorer', 2022, false);
const coupe1 = new coupe_1.Coupe('Chevrolet Camaro', 2023, 'V8', 789012);
const coupe2 = new coupe_1.Coupe('Ford Mustang', 2022, 'V6');
sedan1.displayCarInfo();
sedan2.displayCarInfo();
suv1.displayCarInfo();
suv2.displayCarInfo();
coupe1.displayCarInfo();
coupe2.displayCarInfo();
//# sourceMappingURL=t3.js.map