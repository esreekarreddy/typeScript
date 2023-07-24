//type assertions using as
let myName: unknown = "Sreekar"
const num = (myName as string).length
console.log(num)
