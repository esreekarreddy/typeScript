function print(person: Person): void{
    console.log(`Hi ${person.firstName} ${person.lastName}`)
    console.log(`You are ${person.age} years old`)
}


interface Person {
    firstName: string,
    lastName: string,
    age: number
}

const person: Person = {
    firstName: "Sreekar",
    lastName: "Reddy",
    age: 23
}

print(person)
