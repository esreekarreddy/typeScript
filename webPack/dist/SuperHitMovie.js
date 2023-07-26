import Movie from "./Movie.js";
export default class SuperHitMovie extends Movie {
    constructor(movieName, collection, movieStatus) {
        super(movieName, collection);
        this.movieName = movieName;
        this.collection = collection;
        this.movieStatus = movieStatus;
        this.movieStatus = movieStatus;
    }
    returnStatus() {
        return this.movieStatus;
    }
}
