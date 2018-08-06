
let gameOver =0;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
return array[(Math.floor(Math.random()*3)) ];
}

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }
  
  let computerChoice = randomFrom(computerChoices);
  
if(computerChoice === "rock" && input === "scissors"){
    alert("Computer wins!");
    console.log("You chose "+ input );
     return true;

} else if (computerChoice === "scissors" && input === "paper"){
  alert("Computer win!");
  return true;

} else if (computerChoice === "paper" && input === "rock"){
alert("You win!");
return true;
}

else{
 alert("You win!");
  return false;
 }
}
function start(gameOver, computerChoices) {
  while (!gameOver){
    let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
gameOver = checkInput(playerInput, computerChoices);

} 
}
start(gameOver, computerChoices)  
console.log(computerChoices);


