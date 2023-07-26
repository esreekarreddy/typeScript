import Movie from "./Movie";

export default class SuperHitMovie extends Movie {
    constructor(public movieName: string, public collection: number, public movieStatus: string){
        super(movieName, collection)
        this.movieStatus = movieStatus
    }
    
    returnStatus(): string{
        return this.movieStatus
    }
}