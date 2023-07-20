//part 1
let highScore: number | boolean = 0
highScore = 1
highScore = false


//part 2
let stuff: number[] | string[]
stuff = [1,2,3]
stuff = ["sr", "cp"]


//part 3
type skill = "Beginner" | "Intermediate" | "Advanced" | "Expert"
let SkillLevel: skill


//part 4
type skiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: skill
}


//part 5
type rgb = {
    r: number,
    g: number,
    b: number
}
type hsl = {
    h: number,
    s: number,
    l: number
}
let colors: (rgb | hsl)[] = []
colors.push({r:3, g:4, b:6})
colors.push({h:44, s:55, l:66})


//part 6
function greet(name: string | string[]): void{
    if(typeof name === "string")
        console.log(`Hello ${name}`)
    else
        name.forEach(s => console.log(`Hello ${s}`))
}
greet("sr")
greet(["cp 1", "pe 2", "se 3"])