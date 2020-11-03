"use strict"


//human vs human, human vs computer
//best of three for winner

class Game{
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        this.finalScore = 0;
    }

    displayRules(){
        console.log("Welcome to RPSLS");
        console.log("Here are the rules:")
        console.log("Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock")
    }

    gamePlayers(){
        let chosenType = document.querySelector('input[name="playType"]:checked').value;
        // do{
        //     chosenType = prompt("Do you want to play (1)singleplayer or (2)multiplayer?").trim();
        //     intType = parseInt(chosenType);
        // }while(intType < 1 || intType > 2 || isNaN(intType));

        switch (chosenType) {
            case "singlePlayer":
                this.playerOne = new Human();
                this.playerOne.pickName();
                this.playerTwo = new Computer();
                break;
            case "multiPlayer":
                this.playerOne = new Human();
                this.playerOne.pickName();
                this.playerTwo = new Human();
                this.playerTwo.pickName();
                break;
            default:
                alert("select either single or multi player");
                this.gamePlayers();
                break;
        }        
    }

    gameScore(){
        let playTo = document.querySelector('input[id="pointsToWin"]').value;
        this.finalScore = parseInt(playTo);
    }

    runGame(){
        this.displayRules();
        //this.gamePlayers();
        //this.gameScore();
        
        while(this.playerOne.score < this.finalScore && this.playerTwo.score < this.finalScore){
            this.playerOne.pickGesture();
            this.playerTwo.pickGesture();

            //add new method
            let result = this.playerOne.picked.compareGestures(this.playerTwo.picked);
            if(result == 1){
                this.playerOne.score ++;
                console.log(this.playerOne.name +" won this round with " + this.playerOne.picked.name + ' vs. ' + this.playerTwo.picked.name);
            }else if(result == -1){
                this.playerTwo.score ++;
                console.log(this.playerTwo.name +" won this round with " + this.playerTwo.picked.name + ' vs. ' + this.playerOne.picked.name);
            }else{
                console.log("there is a tie");
            }
        }
        this.displayGameWinner();
    }

    

    displayGameWinner(){
        if(this.playerOne.score>this.playerTwo.score){
            console.log(this.playerOne.name + " won!");
        }else{
            console.log(this.playerTwo.name + " won")
        }
    }
    
}


class Player{
    constructor(){
        this.name = "";
        this.score = 0;

        this.gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
        this.picked = "";
    }
    pickGesture(){
        console.log("Override this method");
    }
    
}

class Human extends Player{
    constructor(){
        super();
    }

    pickName(){
        let nameChoice = "";
        while(nameChoice = "");{
            nameChoice = prompt("What is your name?");
        } 
        this.name = nameChoice;
    }

    pickGesture(){
        let intGesture = 0;
        let chosenGesture;
        do{
            chosenGesture = prompt("Choose (1)rock, (2)paper, (3)scissors, (4)lizard, or (5)Spock").trim();
            intGesture = parseInt(chosenGesture);
        }while(intGesture < 1 || intGesture > 5 || isNaN(intGesture));
        
        this.picked = this.gestures[chosenGesture - 1];
    }
}

class Computer extends Player{
    constructor(){
        super();
        this.name = "Computer";
    }

    pickGesture(){
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

//start button on index.html
//game.runGame();