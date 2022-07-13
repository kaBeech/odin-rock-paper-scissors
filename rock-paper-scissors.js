
const rockWin = "Rock smashes scissors";
const paperWin = "Paper covers rock";
const scissorsWin = "Scissors cut paper";
const computerWin = "Computer wins!"
const playerWin = "You win!"

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

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your fate!");
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    console.log(`${playerSelection}, ${computerSelection}`)
    if (playerSelection === computerSelection) {
        return `Everyone wins! Both players chose ${computerSelection.toLowerCase()}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `${playerWin} ${rockWin}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `${playerWin} ${paperWin}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `${playerWin} ${scissorsWin}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `${computerWin} ${rockWin}`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `${computerWin} ${paperWin}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `${computerWin} ${scissorsWin}`;
    } else {
        return "Try Again!";
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