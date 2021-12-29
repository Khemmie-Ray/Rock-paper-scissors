 
 const play = ['rock', 'paper', 'scissors'];
 
 function computerPlay() {
   let randomPlay = play[Math.floor(Math.random() * 3)];
   return randomPlay;
 } 
 let playerWinCount = 0;
 let computerWinCount = 0;
 
 function playRound(playerSelection, computerSelection) { 
   const caseInsensitivePlayerSelection = playerSelection.toLowerCase();
  console.log(caseInsensitivePlayerSelection);
  console.log(computerSelection);
   let result;
   switch (caseInsensitivePlayerSelection) {
   case 'rock':
     if(computerSelection == 'paper') {
       result = 'Computer wins! Paper beats rock';
       computerWinCount++;
     } else if(computerSelection == 'scissors') {
       result = 'You win! Rock crushes scissors';
       playerWinCount++;
     } else {
       result = 'It is a tie'
     }
     
     break;
     
   case 'paper':
     if(computerSelection == 'scissors') {
       result = 'Computer wins! Scissors cuts paper';
       computerWinCount++;
     } else if(computerSelection == 'rock') {
       result = 'You win! Paper covers rock';
       playerWinCount++;
     } else {
       result = 'It is a tie';
     }
     break;
     
      case 'scissors':
     if(computerSelection == 'paper') {
       result = 'You win! Scissors cuts paper';
       playerWinCount++;
     } else if(computerSelection == 'rock') {
       result = 'Computer wins! Rock crushes scissors';
       computerWinCount++;
     } else {
       result = 'It is a tie';
     }
     break;
     default:
     alert('wrong input');
 }
   return result;
 }
 
 function game() {
 const playerSelection = prompt();
 const computerSelection = computerPlay();

 console.log(playRound(playerSelection, computerSelection));
 }

 function playGame () {

  for (let gamesPlayed = 1; gamesPlayed <= 5; gamesPlayed++) {
      game()
  }

  console.log(playerWinCount, computerWinCount);

  if (playerWinCount > computerWinCount) {
      alert("Jackpot! I Win!")
  } else if (playerWinCount < computerWinCount) {
      alert("Checkmate! Computer Wins")
  } else {
      alert("It's a DRAW")
  }

}

playGame()
