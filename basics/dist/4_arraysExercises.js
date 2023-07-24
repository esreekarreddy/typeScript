"use strict";
//create empty array
const ages = [];
//create a 2-dimensional array
const gameBoard = [];
//create a function to get total of prices
function getTotal(products) {
    let sum = 0;
    for (let product of products)
        sum = sum + product.price;
    return sum;
}
console.log(getTotal([{ "name": "Coffee", price: 15.50 }, { "name": "Tea", price: 20 }]));
