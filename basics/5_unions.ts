//if you do not know the return type
let age: number | string = 21
age = 23
age = "23"


//a variable which can take two object types
type Point = {
    x: number,
    y:number
}
type Loc = {
    latitude: string,
    longitude: string
}

let coordinates: Loc | Point;
coordinates = {x: 2, y:22}
coordinates = {latitude: "123.22", longitude: "12.56"}


//union type with functions
function printAge(age: number | string){
    console.log(`You are ${age} years old`)
}
printAge(23)
printAge("23")
//type narrowing
function calculateTax(price: number | string, tax: number){
    //we can not multiple price with a definite number i.e tax
    //return price * tax

    if(typeof price === "string")
        price = parseFloat(price.replace("$",""))
    return price * tax
}
calculateTax("$500", .02)


//unions & arrays
let stuff: (number | string)[] = [1,2, "Sr", "CP"];
const coords: (Point | Loc)[] = []
coords.push({latitude: "123", longitude: "14.22"})
coords.push({x: 12, y: 23})


//literal type
let zero: 0 = 0
    //zero = 2   //throws an error

let mood: "Happy" | "Sad" | "Undefined" = "Happy"
mood = "Sad"