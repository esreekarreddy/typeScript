"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
//making a get request to JSON placeholder API
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    res.data.forEach(getUser);
})
    .catch(e => console.log(e.code));
function getUser(user) {
    console.log(user.name, user.phone);
}
//lodash methods
console.log(lodash_1.default.sample([12, 33, "SR"]));
