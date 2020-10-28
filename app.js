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

        this.gestrues = [];

        this.gestures.push("Rock");
        this.gestures.push("Paper");
        this.gestures.push("Scissors");
        this.gestures.push("Lizard");
        this.gestures.push("Spock");
    }

    runGame(){
        this.displayRules();
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
    }

    pickGesture(){

    }

    generateRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        return randomNumber;
    }
}

let game = new Game();
console.log('game',game);