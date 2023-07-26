export default class User {
    constructor(public username: string, public enail: string){
        console.log("Welcome to user class!!")
    }
    greetUser(){
        return `Hiii ${this.username}`
    }
}

export function whatAmI(){
    return "I am a human!!!"
}