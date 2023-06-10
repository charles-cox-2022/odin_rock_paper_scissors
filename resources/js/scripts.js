//Delcare Variables
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
//RockPaperScissors
//Start Function
function startGame(){
    console.log('Choose rock, paper, or scissors');
    playerChoice = prompt('Choose rock, paper, or scissors');
    playerChoice = playerChoice.toLowerCase();
    console.log(checkWinner(playerChoice,getComputerChoice()));
}


//PlayGame
function playGame(playerChoice, computerChoice) {
    let gameResult = checkWinner(playerChoice,computerChoice);
    console.log(gameResult);
    if (gameResult === 'win'){
        document.getElementById("playerChoice").style.backgroundColor="green";
        document.getElementById("computerChoice").style.backgroundColor="red";
    } else if (gameResult === 'lose') {
        document.getElementById("playerChoice").style.backgroundColor="red";
        document.getElementById("computerChoice").style.backgroundColor="green";
    } else {
        document.getElementById("playerChoice").style.backgroundColor="yellow";
        document.getElementById("computerChoice").style.backgroundColor="yellow";
    }
}
//Select Scissors
function selectScissors() {
    playerChoice = 'scissors';
    document.getElementById("playerChoice").setAttribute("src","resources/images/scissors.jpg");
    playGame(playerChoice, getComputerChoice());
}
//Select Paper
function selectPaper() {
    playerChoice = 'paper';
    document.getElementById("playerChoice").setAttribute("src","resources/images/paper.jpg");
    playGame(playerChoice, getComputerChoice());
}
//Select Rock
function selectRock() {
    playerChoice = 'rock';
    document.getElementById("playerChoice").setAttribute("src","resources/images/rock.jpg");
    playGame(playerChoice, getComputerChoice());
}

//Get Computer Choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
            
            document.getElementById("computerChoice").setAttribute("src","resources/images/rock.jpg");
            return('rock');
            break;
        case 1:
            document.getElementById("computerChoice").setAttribute("src","resources/images/paper.jpg");
            return('paper');
            break;
        case 2:
            document.getElementById("computerChoice").setAttribute("src","resources/images/scissors.jpg");
            return('scissors');
            break;
        default:
            console.log('Error: Computer Choice is not valid: ' + computerChoice)
            break;
    }
}
//Check Winner
function checkWinner(playerChoice, computerChoice){
    console.log(`${playerChoice} vs ${computerChoice}`)
    switch (playerChoice) {
        case 'rock':
            if(computerChoice == 'scissors'){
                return('win');
                break;
            } else if(computerChoice == 'paper'){
                return('lose');
                break;
            }
            else {
                return('tie')
                break;
            }
            break;
        case 'paper':
            if(computerChoice == 'scissors'){
                return('lose');
                break;
            } else if(computerChoice == 'rock'){
                return('win');
                break;
            }
            else {
                return('tie')
                break;
            }
            break;
        case 'scissors':
            if(computerChoice == 'paper'){
                return('win');
                break;
            } else if(computerChoice == 'rock'){
                return('lose');
                break;
            }
            else {
                return('tie')
                break;
            }
        break;
        default:
            break;
    }
}