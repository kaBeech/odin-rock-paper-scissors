const buttons = document.querySelector('#buttons');

const paperWin = "Paper covers rock";
const scissorsWin = "Scissors cut paper";
const rockWin = "Rock smashes scissors";

const game = {};
game.computerWins = 0;
game.playerWins = 0;


function playRound(playerSelection, computerSelection) {
    score = getWinner(playerSelection, computerSelection);
    game.computerWins += +score[0];
    game.playerWins += +score[1];
    console.log(`Score: ${game.playerWins} to ${game.computerWins}`)   
    if (game.computerWins >= 5 || game.playerWins >= 5) {
    showResult(game.computerWins, game.playerWins);
    removeButtons();
    createNewGameButton();
    }
}

function getWinner(playerSelection, computerSelection) {
    // playerSelection = prompt("Choose your fate!");
    // playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log(`Everyone wins! Both players chose ${computerSelection.toLowerCase()}`);
        return "11";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win! ${rockWin}`);
        return "01";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win! ${paperWin}`);
        return "01";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win! ${scissorsWin}`);
        return "01";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Computer wins! ${rockWin}`);
        return "10";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Computer wins! ${paperWin}`);
        return "10";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Computer wins! ${scissorsWin}`);
        return "10";
    } else {
        console.log("Try Again!");
        return "00";
    }
}

function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// function capitalize(string) {
//     string = "" + string;
//     let start = string[0];
//     start = start.toUpperCase();
//     let rest = string.slice(1,);
//     rest = rest.toLowerCase();
//     return "" + start + rest;
// }

function showResult(computerWins, playerWins) {
    if (computerWins > playerWins) {
        console.log(`Computer wins! ${computerWins} to ${playerWins}`);
    } else if (playerWins > computerWins) {
        console.log(`Player wins! ${playerWins} to ${computerWins}`);
    } else {
        console.log(`Everyone wins! ${computerWins} to ${playerWins}`);
    };
}

function newGame() {
game.computerWins = 0;
game.playerWins = 0;
removeButtons();
createSelectionButtons();
};

function removeButtons() {
    while (buttons.hasChildNodes()) {
        buttons.removeChild(buttons.firstChild);
    }
};


function createNewGameButton() {
    const newButton = document.createElement('button');
        newButton.setAttribute('id', 'newGame');
        newButton.classList.add('playerSelection');
        newButton.textContent = 'New Game?';
        newButton.addEventListener('click', newGame);
        buttons.appendChild(newButton);
};

function createSelectionButtons() {
    const selectionButtons = ['rock', 'paper', 'scissors'];
    for (selection of selectionButtons) {
        const newButton = document.createElement('button');
        newButton.setAttribute('id', selection);
        newButton.classList.add('playerSelection');
        newButton.textContent = selection.toUpperCase();
        newButton.addEventListener('click', function (e) {playRound(e.target.id);});
        buttons.appendChild(newButton);
    }
};

newGame();