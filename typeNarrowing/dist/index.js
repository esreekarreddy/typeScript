"use strict";
//typeof guard
function addOn(item) {
    if (typeof item === "string")
        return item.repeat(3);
    return item * 3;
}
const num = addOn(2);
const str = addOn("SR");
console.log(num, str);
//truthiness guard
const element = document.querySelector(".clsss");
if (element) {
    console.log("element presents");
    console.log(element);
    element.value = "esreekarreddy";
}
else
    console.log("element is null");
//equality narrowing
function equalityCheck(item, item1) {
    if (item === item1) {
        console.log(item, item1);
    }
    else
        console.log("types are not equal");
}
equalityCheck("sr", "sr");
equalityCheck("Sr", 8);
function getRuns(stats) {
    if ("runs" in stats)
        return stats.runs;
    else
        return stats.inningsOneScore + stats.inningsTwoScore;
}
console.log(getRuns({ player: "SR", runs: 99 }));
console.log(getRuns({ player: "SR", inningsOneScore: 122, inningsTwoScore: 57 }));
//instanceof narrowing
function getDate(value) {
    if (value instanceof Date)
        console.log(value.toUTCString());
    else
        console.log(value);
}
getDate("25 July 2023");
getDate(new Date);
function isCat(animal) {
    return animal.catName !== undefined;
}
function typeOfAnimal(animal) {
    if (isCat(animal))
        animal;
    else
        animal;
}
function Movie(movie) {
    switch (movie.genre) {
        case "scifi":
            return `${movie.movieName} is a ${movie.genre.toUpperCase()} film`;
        case "drama":
            return `${movie.movieName} is a ${movie.genre} film`;
        case "romantic":
            return `${movie.movieName} is a ${movie.genre} film`;
        default:
            const exhaustiveCheck = movie;
            return "exhaustive check failed";
    }
}
const sciFiMovie = {
    movieName: "Inception",
    budget: 20000,
    collection: 100000,
    genre: "scifi"
};
console.log(Movie(sciFiMovie));
//
