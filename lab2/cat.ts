import { Animal } from "./animal";

export class Cat implements Animal {
    name: String;
    age: number;

    constructor (name: String, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} is walking`)
    }

    voice(): String {
        return "Meow";
    }
}