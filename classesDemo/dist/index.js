"use strict";
class Coach {
    constructor(coach, country) {
        this.coach = coach;
        this.country = country;
        this.age = 55;
        this.country = country;
        this.coach = coach;
    }
    get coachName() {
        return this.coach;
    }
}
class Player extends Coach {
    constructor(first, last, coach, country) {
        super(coach, country);
        this.coach = coach;
        this.country = country;
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    get lastName() {
        return this.last;
    }
    secretMethod() {
        return "Secret method private";
    }
    get secret() {
        return this.secretMethod();
    }
    get getScore() {
        return this.score;
    }
    set newScore(scorePassed) {
        this.score = scorePassed;
    }
}
const player1 = new Player("Sreekar", "Reddy", "Dravid", "India");
console.log(player1.first, player1.lastName, player1.coachName);
console.log(player1.getScore);
//player1.first = "CH"
console.log(player1.secret);
player1.newScore = 90;
console.log(player1.getScore);
console.log(player1.age, player1.country);
class PlayerType {
    constructor(matches) {
        this.matches = matches;
    }
    gender() {
        return "Male";
    }
}
class PlayerDetails extends PlayerType {
    constructor(matches) {
        super(matches);
    }
    ranjiPlayer() {
        return false;
    }
    intlPlayer() {
        return true;
    }
}
const playerDetails = new PlayerDetails(240);
console.log(playerDetails.matches, playerDetails.intlPlayer());
