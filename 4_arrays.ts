//array without any type
const names = []


//type is empty array
const numList: [] = []
    //numList.push(1)    //throws an error


//array with type number Array
const ageList: number[] = []
ageList.push(22)
    //ageList.push("SR")  //throws an error


//defining type of Array using <>
const flag: Array<boolean> = []
flag.push(true)
flag.push(false)
for (let f in flag)
    console.log(f)  //return 1 and 0
for (let f of flag)
    console.log(f)  //returns true and false


//assigning a object type array
type Point = {
    x?: number,
    y:number
}
const coordinates: Point[] = []
coordinates.push({x:22, y:23})
coordinates.push({y:33})
coordinates.forEach(point => console.log(point.x, point.y))


//multidimensional array
const tictac: string[][] = [
    ["x", "o", "x"],
    ["o", "x", "o"]
]
for(let i of tictac)
    for (let j of i)
        console.log(j)