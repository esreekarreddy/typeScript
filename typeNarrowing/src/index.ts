//typeof guard
function addOn(item: string | number) {
    if (typeof item === "string")
        return item.repeat(3)
    return item * 3
}
const num = addOn(2)
const str = addOn("SR")
console.log(num, str)


//truthiness guard
const element = document.querySelector<HTMLInputElement>(".clsss")
if (element) {
    console.log("element presents")
    console.log(element)
    element.value = "esreekarreddy"
}else
    console.log("element is null")



//equality narrowing
function equalityCheck(item: string | boolean, item1: string | number){
    if (item === item1){
        console.log(item, item1)
    }else
        console.log("types are not equal")
}
equalityCheck("sr", "sr")
equalityCheck("Sr", 8)


//in operator narrowing
interface ODI {
    player: string,
    runs: number
}
interface Test {
    player: string,
    inningsOneScore: number,
    inningsTwoScore: number
}
function getRuns(stats: ODI | Test): number{
    if("runs" in stats)
        return stats.runs
    else
        return stats.inningsOneScore + stats.inningsTwoScore
}
console.log(getRuns({player: "SR", runs: 99}))
console.log(getRuns({player: "SR", inningsOneScore: 122, inningsTwoScore: 57}))


//instanceof narrowing
function getDate(value: string | Date){
    if(value instanceof Date)
        console.log(value.toUTCString())
    else   
        console.log(value)
}
getDate("25 July 2023")
getDate(new Date)


//type predicates
interface Cat {
    catName: string,
    age: number
}
interface Dog {
    dogName: string,
    age: number
}
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).catName !== undefined
}

function typeOfAnimal(animal: Cat | Dog){
    if(isCat(animal))
        animal;
    else
        animal;
}


//discriminated unions
interface SciFiMovie {
    movieName: string,
    collection: number,
    budget: number,
    genre: "scifi"
}
interface DramaMovie {
    movieName: string,
    collection: number,
    budget: number,
    genre: "drama"
}
interface RomanticMovie {
    movieName: string,
    collection: number,
    budget: number,
    genre: "romantic"
}
interface ThrillerMovie {
    movieName: string,
    collection: number,
    budget: number,
    genre: "thriller"
}
type Genre = SciFiMovie | DramaMovie | RomanticMovie
function Movie(movie: Genre): string{
    switch(movie.genre){
        case "scifi":
            return `${movie.movieName} is a ${movie.genre.toUpperCase()} film`
        case "drama":
            return `${movie.movieName} is a ${movie.genre} film`
        case "romantic":  
            return `${movie.movieName} is a ${movie.genre} film`  
        default:
            const exhaustiveCheck: never = movie
            return "exhaustive check failed"
    }
}
const sciFiMovie: SciFiMovie = {
    movieName: "Inception", 
    budget: 20_000, 
    collection: 1_00_000, 
    genre: "scifi"
}
console.log(Movie(sciFiMovie))