"use strict"

// Rock crushes Scissors
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock

//human vs human, human vs computer
//best of three for winner

class Game{
    constructor(){
        this.playerOne = new Player("Harry");
        this.playerTwo = new Player("Ron");

        

    }

    runGame(){
        this.displayRules();

        this.playerOne.pickGesture();
        let playerOneGesture = this.playerOne.pickGesture();
        let playerTwoGesture = this.playerTwo.pickGesture();


        // while(this.playerOne.score < 3 && this.playerTwo.score < 3){
        // }
    }

    displayRules(){
        console.log("Welcome to RPSLS");
        console.log("Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock")
    }
}


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;

        this.gestrues = [new Rock,"Paper","Scissors","Lizard","Spock"];
    }

    pickGesture(){
        let chosenGesture = this.gestures[this.generateRandomNumber()];
        return chosenGesture;
    }

    generateRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        return randomNumber;
    }
}

class Gesture{
    constructor(){
        this.name = "";
    }

    //child classes methods for winning and loosing


}

class Rock extends Gesture{
    constructor(){
        super();
        this.name = "Rock";
        //winning array
        //loosing array
    }
}

let game = new Game();
console.log('game',game);