function computerPlay(){
  let a = Math.floor(Math.random()*3)
  if(a==0){
    return("rock");
  }
  else if(a==1){
    return("paper");
  }
  else if(a==2){
    return("scissors");
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){

  if(computerSelection == playerSelection){
    return("It's a Draw");
  }
  else if((computerSelection=="rock") && (playerSelection=="paper")){
    playerScore+=1;
    return("You Win! Paper beats Rock");
  }
  else if((computerSelection=="rock") && (playerSelection=="scissors")){
    computerScore+=1;
    return("You Lose! Scissors loses to Rock");
  }
  else if((computerSelection=="paper") && (playerSelection=="scissors")){
    playerScore+=1;
    return("You Win! Scissors beat Paper");
  }
  else if((computerSelection=="paper") && (playerSelection=="rock")){
    computerScore+=1;
    return("You Lose! Rock loses to Paper");
  }
  else if((computerSelection=="scissors") && (playerSelection=="paper")){
    computerScore+=1;
    return("You Lose! Paper loses to Scissors");
  }
  else if((computerSelection=="scissors") && (playerSelection=="rock")){
    playerScore+=1;
    return("You Win! Rock beats Scissors");

  }
}

function game(){
  let playerInput;
  for(let i = 0; i<5; i++){
    playerInput = prompt("Choose Rock, Paper or Scissor");
    playerInput = playerInput.toLowerCase();
    console.log(playRound(playerInput,computerPlay()));
  }
  console.log("Your Score", playerScore);
  console.log("Computer's Score", computerScore);
}
//playRound(playerInput,computerPlay());

game();
