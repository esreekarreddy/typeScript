"use strict";
//function with a object parameter
function printName(person) {
    return person.firstName + " " + person.lastName;
}
console.log(printName({ firstName: "Sreekar", lastName: "Reddy" }));
//assigning object type annotation for a variable
var coordinates = { x: 25, y: 35 };
console.log(coordinates.x, coordinates.y);
//returing an object
function printCoordinates() {
    return coordinates;
}
console.log(printCoordinates(), " from function");
console.log(printCoordinates().x, printCoordinates().y);
function doubleTheNumber(point) {
    //point.x = 22   -- will throw read-only error
    return { x: point.x * 2, y: point.y * 2 };
}
console.log(doubleTheNumber({ x: 2, y: 3 }));
let cicle = {
    radius: 4,
    color: "red",
    flag: true
};
console.log(cicle);
