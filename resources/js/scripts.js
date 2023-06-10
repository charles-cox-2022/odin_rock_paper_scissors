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
//Get Computer Choice
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
        case 0:
            return('rock');
            break;
        case 1:
            return('paper');
            break;
        case 2:
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