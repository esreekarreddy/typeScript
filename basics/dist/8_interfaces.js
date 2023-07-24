"use strict";
const coordinates = { x: 12, y: 34 };
const myName = {
    firstName: "Sreekar",
    lastName: "Reddy",
    id: 36,
    greet: () => {
        return "hi";
    }
};
const laptop = {
    name: "Mac",
    price: 100000,
    discount(percent) {
        const newPrice = this.price * (1 - percent);
        this.price = newPrice;
        return this.price;
    }
};
console.log(laptop.discount(0.4));
const family = { mom: "PE", dad: "SSR" };
const myDetails = {
    id: 36,
    firstName: "Sreekar",
    lastName: "Reddy",
    greet() {
        return `Hi ${this.firstName}`;
    },
    mom: "PE",
    dad: "SSR",
    getDetails() {
        return `Hi ${this.firstName} ${this.lastName}, you mom is ${this.mom} and dad is ${this.dad}`;
    },
};
console.log(myDetails.getDetails());
