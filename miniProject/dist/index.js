"use strict";
function print(person) {
    console.log(`Hi ${person.firstName} ${person.lastName}`);
    console.log(`You are ${person.age} years old`);
}
const person = {
    firstName: "Sreekar",
    lastName: "Reddy",
    age: 23
};
print(person);
