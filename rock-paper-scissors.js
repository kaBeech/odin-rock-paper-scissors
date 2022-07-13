


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
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 0, score = "00"; i < 5; i++) {
        score = playRound();
        computerWins += +score[0];
        playerWins += +score[1];
        console.log(`Score: ${playerWins} to ${computerWins}`)     
    }
    showResult(computerWins, playerWins)
}


function showResult(computerWins, playerWins) {
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
    const rockWin = "Rock smashes scissors";
    const paperWin = "Paper covers rock";
    const scissorsWin = "Scissors cut paper";
    const computerWin = "Computer wins!";
    const playerWin = "You win!";
    if (playerSelection === computerSelection) {
        console.log(`Everyone wins! Both players chose ${computerSelection.toLowerCase()}`);
        return "11";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`${playerWin} ${rockWin}`);
        return "01";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`${playerWin} ${paperWin}`);
        return "01";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`${playerWin} ${scissorsWin}`);
        return "01";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`${computerWin} ${rockWin}`);
        return "10";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`${computerWin} ${paperWin}`);
        return "10";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`${computerWin} ${scissorsWin}`);
        return "10";
    } else {
        console.log("Try Again!");
        return (playRound());
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