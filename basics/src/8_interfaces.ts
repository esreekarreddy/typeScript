interface Point {
    x: number;
    y: number
}
const coordinates: Point = {x: 12, y:34}


//optional and readonly
interface FullName {
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
    greet() : string
}
const myName: FullName = {
    firstName: "Sreekar", 
    lastName: "Reddy", 
    id: 36, 
    greet: () => {
        return "hi"
    }
}


//method parameters
interface Product {
    name: string;
    price: number;
    discount(percent: number): number
}
const laptop: Product = {
    name: "Mac",
    price: 100000,
    discount(percent: number) {
        const newPrice = this.price * (1 - percent)
        this.price = newPrice
        return this.price
    }    
}
console.log(laptop.discount(0.4))


//merging of interface properties
interface Family {
    mom: string
}
interface Family {
    dad: string
}
const family: Family = {mom: "PE", dad: "SSR"}


//extending interfaces
interface MyDetails extends FullName, Family {
    getDetails(): string
}
const myDetails: MyDetails = {
    id: 36,
    firstName: "Sreekar",
    lastName: "Reddy",
    greet() {
        return `Hi ${this.firstName}`
    },
    mom: "PE",
    dad: "SSR",
    getDetails() {
        return `Hi ${this.firstName} ${this.lastName}, you mom is ${this.mom} and dad is ${this.dad}`
    },
}
console.log(myDetails.getDetails())