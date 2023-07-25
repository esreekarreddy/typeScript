interface CoachAge {
    age: number;
}

interface CoachCountry {
    country: string
}

class Coach implements CoachAge, CoachCountry{
    age: number = 55;

    constructor(public coach: string, public country: string){
        this.country = country
        this.coach = coach
    }

    get coachName(): string{
        return this.coach
    }
}


class Player extends Coach{

    readonly first: string;
    private last: string;
    private score: number = 0;

    constructor(first: string, last: string, public coach: string, public country: string){
        super(coach, country)
        this.first = first;
        this.last = last
    }

    get lastName(){
        return this.last
    }

    private secretMethod(): string {
        return "Secret method private"
    }

    get secret(){
        return this.secretMethod()
    }

    get getScore(){
        return this.score
    }

    set newScore(scorePassed: number){
        this.score = scorePassed
    }

}

const player1 = new Player("Sreekar", "Reddy", "Dravid", "India")

console.log(player1.first, player1.lastName, player1.coachName)
console.log(player1.getScore)
    //player1.first = "CH"
console.log(player1.secret)

player1.newScore = 90
console.log(player1.getScore)

console.log(player1.age, player1.country)


abstract class PlayerType {
    abstract ranjiPlayer(): boolean;
    abstract intlPlayer(): boolean;
    constructor(public matches: number){}
    gender(): string{
        return "Male"
    }
}

class PlayerDetails extends PlayerType {

    constructor(matches: number){
        super(matches)
    }
    
    ranjiPlayer(): boolean {
        return false;
    }

    intlPlayer(): boolean {
        return true;
    }
}

const playerDetails = new PlayerDetails(240)
console.log(playerDetails.matches, playerDetails.intlPlayer())
