











class Coach {

    constructor(coach){
       this.coach = coach
    }

    get coachName() {
        return this.coach
    }
}

class Player extends Coach{

    static message = "This is a static message"
    static staticMethod(){
        return "Returning a random number: " + Math.random()
    }

    _score = 10
    #name = "Sreekar"

    constructor(game, place="hyd", coachName){
        super(coachName)
        this.game = game
        this.place = place
        console.log(`Welcome to ${game} game`)
    }

    get name(){
        return this.#name;
    }

    set name(name){
        if( typeof name !== "string"){
            throw new Error("Name should be a string")
        }
        this.#name = name
    }

    type() {
        console.log("Batsman")
    }
}



const player1 = new Player("cricket", "BLR", "Dravid")
player1.type()

//retrieve values set by constructor
console.log(player1.game , player1.place)

//retrieve private field
console.log(player1._score)
//console.log(player1.#name)

//getters and setters
console.log(player1.name)
player1.name = "Reddy"
    //player1.name = 1
console.log(player1.name)

//accessing static property
console.log(Player.message)
console.log(Player.staticMethod())

//inheritance
console.log(player1.coachName)

