"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_1 = require("./cat");
const fish_1 = require("./fish");
const bird_1 = require("./bird");
const cat = new cat_1.Cat("Barsik", 1);
cat.move();
console.log(`${cat.name} says ${cat.voice()}`);
const bird = new bird_1.Bird("Patric", 6);
bird.move();
console.log(`${bird.name} says ${bird.voice()}`);
const fish = new fish_1.Fish("Megadon", 3);
fish.move();
//# sourceMappingURL=t1.js.map