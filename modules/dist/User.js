export default class User {
    constructor(username, enail) {
        this.username = username;
        this.enail = enail;
        console.log("Welcome to user class!!");
    }
    greetUser() {
        return `Hiii ${this.username}`;
    }
}
export function whatAmI() {
    return "I am a human!!!";
}
