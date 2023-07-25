"use strict";
//generic inbuilt interface Array
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
//querySelector is a generic function
const inputELement = document.querySelector("#textinput");
inputELement.value = "esreekarreddy";
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => { alert(`Hi ${inputELement.value}`); });
function identityFinder(item) {
    return item;
}
const num = identityFinder(Math.random());
const animal = identityFinder({ aName: "billy", age: 13 });
console.log(num, animal.aName, animal.age);
//another custom made generic function to pick a random element from an array
function pickAnElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
const numberArray = [11, 23, 45, 66, 77, 104, 999];
const stringArray = ["Sreekar", "Shiva", "Padma"];
const animalArray = [
    { aName: "Billy", age: 12 },
    { aName: "Kutty", age: 20 },
    { aName: "Tiger", age: 15 }
];
const pickedNumber = pickAnElement(numberArray);
const pickedString = pickAnElement(stringArray);
const pickedAnimal = pickAnElement(animalArray);
console.log(pickedNumber, pickedString, pickedAnimal.aName, pickedAnimal.age);
//multiple generic types, return (T & U)
function mergeObjects(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const myDetails = mergeObjects({ first: "Sreekar", last: "Reddy" }, { father: "Shiva", mother: "Padma", age: 24 });
console.log(myDetails);
class Cricket {
    constructor() {
        this.details = [];
    }
    addDetails(d) {
        this.details.push(d);
    }
    get stats() {
        return this.details[0];
    }
}
const addDomStats = new Cricket;
addDomStats.addDetails({ seriesName: "Ranzi", prizeMoney: 20000 });
const addIntlStats = new Cricket;
addIntlStats.addDetails({ seriesName: "World Cup", broadcaster: "Jio" });
console.log(addDomStats.stats);
console.log(addIntlStats.stats);
