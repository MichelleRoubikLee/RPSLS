"use strict"


//human vs human, human vs computer
//best of three for winner

class Game{
    constructor(){
        this.playerOne = new Player("Harry");
        this.playerTwo = new Player("Ron");
        this.playerComp = new Computer();
    }

    runGame(){
        this.displayRules();
        let playType = prompt("Do you want to play (1)singleplayer or (2)multiplayer?");
        let first = this.playerOne;
        let second;
        if(playType == 1){
            second = this.playerComp;
        }else if(playType == 2){
            second = this.playerTwo;
        }
        
        while(first.score < 2 && second.score < 2){
            first.pickGesture();
            second.pickRandomGesture();
            let result = first.picked.compareGestures(second.picked);
            if(result == 1){
                first.score ++;
                console.log("Player one won this round");
            }else if(result == -1){
                second.score ++;
                console.log("Player two won this round");
            }else{
                console.log("there is a tie");
            }
        }
        this.displayGameWinner();
    }

    displayRules(){
        console.log("Welcome to RPSLS");
        console.log("Here are the rules:")
        console.log("Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock")

    }

    displayGameWinner(){
        if(this.playerOne.score>this.playerTwo.score){
            console.log("Player One won!");
        }else{
            console.log("Player Two won")
        }
    }
    
}


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;

        this.gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
        this.picked = "";
    }

    pickGesture(){
        let chosenGesture = prompt("Choose 'rock', 'paper',' scissors', 'lizard', or 'spock'");
        chosenGesture = chosenGesture.charAt(0).toUpperCase() + chosenGesture.slice(1).toLowerCase();
        this.picked = chosenGesture;
    }
}

class Computer extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }

    pickRandomGesture(){
        let chosenGesture = this.gestures[this.generateRandomNumber()];
        this.picked = chosenGesture;
    }

    generateRandomNumber(){
        let randomNumber = Math.floor(Math.random() * 5);
        return randomNumber;
    }
}

class Gesture{
    constructor(){
        this.name = "";
        this.win = [];
        this.loose = [];
    }

    //child classes methods for winning and loosing
    compareGestures(gestureTwo){
        if(this.win.includes(gestureTwo.name)){
            return 1;
        }else if(this.loose.includes(gestureTwo.name)){
            return -1;
        }else{
            return 0;
        }
    }
}



class Rock extends Gesture{
    constructor(){
        super();
        this.name = "Rock";
        this.win = ["Scissors","Lizard"];
        this.loose = ["Paper","Spock"];
    }
}

class Scissors extends Gesture{
    constructor(){
        super();
        this.name = "Scissors";
        this.win = ["Paper","Lizard"];
        this.loose = ["Rock","Spock"];
    }
}

class Paper extends Gesture{
    constructor(){
        super();
        this.name = "Paper";
        this.win = ["Rock","Spock"];
        this.loose = ["Scissors","Lizard"];
    }
}

class Lizard extends Gesture{
    constructor(){
        super();
        this.name = "Lizard";
        this.win = ["Paper","Spock"];
        this.loose = ["Scissors","Rock"];
    }
}

class Spock extends Gesture{
    constructor(){
        super();
        this.name = "Spock";
        this.win = ["Rock","Scissors"];
        this.loose = ["Paper","Lizard"];
    }
}

let game = new Game();
game.runGame();