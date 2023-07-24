"use strict";
//part 1
let highScore = 0;
highScore = 1;
highScore = false;
//part 2
let stuff;
stuff = [1, 2, 3];
stuff = ["sr", "cp"];
let SkillLevel;
let colors = [];
colors.push({ r: 3, g: 4, b: 6 });
colors.push({ h: 44, s: 55, l: 66 });
//part 6
function greet(name) {
    if (typeof name === "string")
        console.log(`Hello ${name}`);
    else
        name.forEach(s => console.log(`Hello ${s}`));
}
greet("sr");
greet(["cp 1", "pe 2", "se 3"]);
