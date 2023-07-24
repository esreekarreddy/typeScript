"use strict";
//return type annotation given
function square(num) {
    return num * num;
}
console.log(square(3));
//parameter anotation
const doAFavour = (favour, amountRequired, agree = false) => {
    return favour + amountRequired + agree;
};
console.log(doAFavour("Buy a Amazon voucher", 345, true));
console.log(doAFavour("Buy a Flipkart voucher", 20));
//anonymous function type
//hover on color to check what type is inferred by TS
const colors = ["red", "blue"];
const modifiedColors = colors.map(color => {
    return color.toUpperCase();
});
modifiedColors.forEach(s => console.log(s));
//never type
function makeError(message) {
    throw new Error(message);
}
//makeError("Get out")
