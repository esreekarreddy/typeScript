"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 10] = "UP";
    Direction[Direction["DOWN"] = 11] = "DOWN";
    Direction[Direction["LEFT"] = 12] = "LEFT";
    Direction[Direction["RIGHT"] = 13] = "RIGHT";
})(Direction || (Direction = {}));
//values for down, left, right will be 11, 12, 13
let directionValue = Direction.LEFT;
console.log(directionValue);
//returning enum name
let directionName = Direction[11];
console.log(directionName);
//heterogenous enums
var Name;
(function (Name) {
    Name["first"] = "Sreekar";
    Name["last"] = "Reddy";
    Name["sur"] = "Edulapalli";
})(Name || (Name = {}));
function fullName(fName) {
    return fName[2] + " " + fName[0] + " " + fName[1];
}
console.log(fullName([Name.first, Name.last, Name.sur]));
