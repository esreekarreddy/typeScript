export default class Movie {
    constructor(public movieName: string, public collection: number){
        this.movieName = movieName
        this.collection = collection
        console.log("Welcome to Movie class")
        console.log(`${this.movieName} collected ${this.collection}`)
    }
}