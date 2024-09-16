var myString = "Hello World!";
var myNumber = 42;
var myBoolean = true;
var myAny = "Could be anything";
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);
var stringArray = ["TypeScript", "JavaScript", "Node.js"];
var numberArray = [10, 20, 30];
console.log("String Array:", stringArray);
console.log("Number Array:", numberArray);
function greet(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greet("Diana", 19);
greet("Bob");
