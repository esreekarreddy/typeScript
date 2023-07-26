//named inports
import {sum, sample} from "./utils.js";
console.log(sample([12,23, 44, 55, 67]))
console.log(sum(2, 2))

//default import
import User from "./User.js"
const user = new User("Sreekar", "a@gmail.com")
console.log(user.greetUser())

//alias import
import { whatAmI as what } from "./User.js";
console.log(what())