
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
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    console.log(`${playerSelection}, ${computerSelection}`)
    if (playerSelection === computerSelection) {
        return `Draw! Both players chose ${computerSelection}`;
    } else {
        switch (playerSelection, computerSelection) {
            case "Scissors", "Paper":
                return `${playerWin} ${scissorsWin}`;
            case "Rock", "Scissors":
                return `${playerWin} ${rockWin}`;
            case "Paper", "Rock":
                return `${playerWin} ${paperWin}`;
            case "Paper", "Scissors":
                return `${computerWin} ${scissorsWin}`;
            case "Scissors", "Rock":
                return `${computerWin} ${rockWin}`;
            case "Rock", "Paper":
                return `${computerWin} ${paperWin}`;
            default:
                return "Try Again!";
        }
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