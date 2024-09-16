import { Cat } from "./cat";
import { Fish } from "./fish";
import { Bird } from "./bird";

const cat = new Cat("Barsik", 1);
cat.move();
console.log(`${cat.name} says ${cat.voice()}`);

const bird = new Bird("Patric", 6);
bird.move();
console.log(`${bird.name} says ${bird.voice()}`);

const fish = new Fish("Megadon", 3);
fish.move();