import {add, multiply, divide} from "./utils"
import Movie from "./Movie"
import SuperHitMovie from "./SuperHitMovie"

console.log(add(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))

const movie1 = new Movie("Inception", 20_000)

const superHitMovie1 = new SuperHitMovie("Interstellar", 30_000, "blockbuster")
console.log(superHitMovie1.returnStatus())