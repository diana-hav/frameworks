import { Animal } from "./animal";

export class Bird implements Animal {
    name: String;
    age: number;

    constructor (name: String, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} is flying`)
    }

    voice(): String {
        return "Chirick";
    }
}