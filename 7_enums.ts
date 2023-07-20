enum Direction {
    UP = 10,
    DOWN,
    LEFT,
    RIGHT
}

//values for down, left, right will be 11, 12, 13
let directionValue: Direction = Direction.LEFT
console.log(directionValue)

//returning enum name
let directionName: string = Direction[11]
console.log(directionName)


//heterogenous enums
enum Name{
    first = "Sreekar",
    last = "Reddy",
    sur = "Edulapalli"
}

function fullName(fName: Name[]){
    return fName[2] + " " + fName[0] + " "  + fName[1]
}
console.log(fullName([Name.first, Name.last, Name.sur]))