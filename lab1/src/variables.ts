let myString: string = "Hello World!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myAny: any = "Could be anything";

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);

let stringArray: string[] = ["TypeScript", "JavaScript", "Node.js"];
let numberArray: number[] = [10, 20, 30];

console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);

function greet(name: string, age: number = 25): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Diana", 19);

greet("Bob");

let t: string | number = 9;

function n(a: number, b: number): number {
    return a+b;
}

const fun =(a: number) => a