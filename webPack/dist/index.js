import { add, multiply, divide } from "./utils.js";
import Movie from "./Movie.js";
import SuperHitMovie from "./SuperHitMovie.js";
console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
const movie1 = new Movie("Inception", 20000);
const superHitMovie1 = new SuperHitMovie("Interstellar", 30000, "blockbuster");
console.log(superHitMovie1.returnStatus());
