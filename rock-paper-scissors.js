
const rockWin = "Rock smashes scissors";
const paperWin = "Paper covers rock";
const scissorsWin = "Scissors cut paper";
const computerWin = "Computer wins!";
const playerWin = "You win!";
let playerWins = 0;
let computerWins = 0;


function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    switch (selection) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function game() {
    computerWins = 0;
    playerWins = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Score: ${playerWins} to ${computerWins}`)     
    }
    if (computerWins > playerWins) {
        console.log(`Computer wins! ${computerWins} to ${playerWins}`);
    } else if (playerWins > computerWins) {
        console.log(`Player wins! ${playerWins} to ${computerWins}`);
    } else {
        console.log(`Everyone wins! ${computerWins} to ${playerWins}`);
    };
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your fate!");
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    // console.log(`${playerSelection}, ${computerSelection}`)
    if (playerSelection === computerSelection) {
        console.log(`Everyone wins! Both players chose ${computerSelection.toLowerCase()}`);
        playerWins += 1;
        computerWins += 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerWins += 1;
        console.log(`${playerWin} ${rockWin}`);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerWins += 1;
        console.log(`${playerWin} ${paperWin}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerWins += 1;
        console.log(`${playerWin} ${scissorsWin}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerWins += 1;
        console.log(`${computerWin} ${rockWin}`);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerWins += 1;
        console.log(`${computerWin} ${paperWin}`);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerWins += 1;
        console.log(`${computerWin} ${scissorsWin}`);
    } else {
        console.log("Try Again!");
        playRound();
    }
}

function capitalize(string) {
    string = "" + string;
    let start = string[0];
    start = start.toUpperCase();
    let rest = string.slice(1,);
    rest = rest.toLowerCase();
    return "" + start + rest;
}