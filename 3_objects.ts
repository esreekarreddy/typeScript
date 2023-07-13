//function with a object parameter
function printName( person: {firstName: string, lastName: string}): string{
    return person.firstName + " " + person.lastName
}
console.log(printName({firstName: "Sreekar", lastName: "Reddy"}))


//assigning object type annotation for a variable
var coordinates: {x: number, y: number} = {x: 25, y: 35}
console.log(coordinates.x, coordinates.y)


//returing an object
function printCoordinates(): {x: number, y:number}{
    return coordinates
}
console.log(printCoordinates(), " from function")
console.log(printCoordinates().x, printCoordinates().y)


//type Alias
type Point = {
    readonly x: number,
    y: number,
    z?: number
}

function doubleTheNumber(point: Point): Point{
    //point.x = 22   -- will throw read-only error
    return {x: point.x * 2, y: point.y * 2}
}
console.log(doubleTheNumber({x:2, y:3}))


//intersection types
type Circle = {
    radius: number
}

type Color = {
    color: string
}

type ColorfulCircle = Circle & Color & {flag: boolean}

let cicle: ColorfulCircle = {
    radius: 4,
    color: "red",
    flag: true
}
console.log(cicle)



