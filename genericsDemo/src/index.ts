//generic inbuilt interface Array
const numbers: Array<number> = [1, 2, 3]
numbers.forEach(num => console.log(num))

//querySelector is a generic function
const inputELement = document.querySelector<HTMLInputElement>("#textinput")!;
inputELement.value = "esreekarreddy"

const btn = document.querySelector<HTMLButtonElement>(".btn")!
btn.addEventListener("click", () => {alert(`Hi ${inputELement.value}`)})


//custom mande generic function
type Animal = {
    aName: string,
    age: number
}
function identityFinder<Type>(item: Type): Type {
    return item
}

const num = identityFinder<number>(Math.random())
const animal = identityFinder<Animal>({aName: "billy", age: 13})
console.log(num, animal.aName, animal.age)


//another custom made generic function to pick a random element from an array
function pickAnElement<T>(list: T[]): T {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

const numberArray: number[] = [11, 23, 45, 66, 77, 104, 999]
const stringArray: string[] = ["Sreekar", "Shiva", "Padma"]
const animalArray: Animal[] = [ 
    {aName: "Billy", age: 12},
    {aName: "Kutty", age: 20},
    {aName: "Tiger", age: 15}
] 

const pickedNumber: number = pickAnElement<number>(numberArray)
const pickedString: string = pickAnElement<string>(stringArray)
const pickedAnimal: Animal = pickAnElement<Animal>(animalArray)
console.log(pickedNumber, pickedString, pickedAnimal.aName, pickedAnimal.age)


//multiple generic types, return (T & U)
function mergeObjects<T extends object, U extends object>(object1: T, object2: U){
    return {
        ...object1,
        ...object2,
    };
}
const myDetails = mergeObjects(
    {first: "Sreekar", last: "Reddy"}, 
    {father: "Shiva", mother: "Padma", age: 24})
console.log(myDetails)


//generics with classes
interface DomesticCricket {
    seriesName: string,
    prizeMoney: number
}

interface InternationalCricket {
    seriesName: string,
    broadcaster: string
}

class Cricket<T>{
    public details: T[] = []
    addDetails(d: T){
        this.details.push(d)
    }

    get stats(){
        return this.details[0]
    }
}

const addDomStats = new Cricket<DomesticCricket>
addDomStats.addDetails({seriesName: "Ranzi", prizeMoney: 20_000})
const addIntlStats = new Cricket<InternationalCricket>
addIntlStats.addDetails({seriesName: "World Cup", broadcaster: "Jio"})
console.log(addDomStats.stats)
console.log(addIntlStats.stats)