"use strict";
//if you do not know the return type
let age = 21;
age = 23;
age = "23";
let coordinates;
coordinates = { x: 2, y: 22 };
coordinates = { latitude: "123.22", longitude: "12.56" };
//union type with functions
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("23");
//type narrowing
function calculateTax(price, tax) {
    //we can not multiple price with a definite number i.e tax
    //return price * tax
    if (typeof price === "string")
        price = parseFloat(price.replace("$", ""));
    return price * tax;
}
calculateTax("$500", .02);
//unions & arrays
let stuff = [1, 2, "Sr", "CP"];
const coords = [];
coords.push({ latitude: "123", longitude: "14.22" });
coords.push({ x: 12, y: 23 });
//literal type
let zero = 0;
//zero = 2   //throws an error
let mood = "Happy";
mood = "Sad";
