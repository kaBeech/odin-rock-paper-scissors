const buttons = document.querySelector('#buttons');
const computerScore = document.querySelector('#computerScore');
const humanScore = document.querySelector('#humanScore');
const matchResult = document.querySelector('#matchResult');
const gameResult = document.querySelector('#gameResult');




const paperWin = "Paper covers rock";
const scissorsWin = "Scissors cut paper";
const rockWin = "Rock smashes scissors";

const game = {};
game.computerWins = 0;
game.humanWins = 0;


function playRound(humanSelection, computerSelection) {
    score = getWinner(humanSelection, computerSelection);
    game.computerWins += +score[0];
    game.humanWins += +score[1];
    computerScore.textContent = game.computerWins;
    humanScore.textContent = game.humanWins;   
    if (game.computerWins >= 5 || game.humanWins >= 5) {
    showResult(game.computerWins, game.humanWins);
    removeButtons();
    createNewGameButton();
    }
}

function getWinner(humanSelection, computerSelection) {
    // humanSelection = prompt("Choose your fate!");
    // humanSelection = capitalize(humanSelection);
    computerSelection = computerPlay();
    if (humanSelection === computerSelection) {
        matchResult.textContent = `Everyone wins! Both humans chose ${computerSelection.toLowerCase()}`;
        return "11";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        matchResult.textContent = `You win! ${rockWin}`;
        return "01";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        matchResult.textContent = `You win! ${paperWin}`;
        return "01";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        matchResult.textContent = `You win! ${scissorsWin}`;
        return "01";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        matchResult.textContent = `Computer wins! ${rockWin}`;
        return "10";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        matchResult.textContent = `Computer wins! ${paperWin}`;
        return "10";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        matchResult.textContent = `Computer wins! ${scissorsWin}`;
        return "10";
    } else {
        matchResult.textContent = "Try Again!";
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

function showResult(computerWins, humanWins) {
    if (computerWins > humanWins) {
        gameResult.textContent = `Computer wins! ${computerWins} to ${humanWins}`;
    } else if (humanWins > computerWins) {
        gameResult.textContent = `You win! ${humanWins} to ${computerWins}`;
    } else {
        gameResult.textContent = `Everyone wins! ${computerWins} to ${humanWins}`;
    };
}

function newGame() {
game.computerWins = 0;
game.humanWins = 0;
matchResult.textContent = "";
gameResult.textContent = "";
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
        newButton.classList.add('humanSelection');
        newButton.textContent = 'New Game?';
        newButton.addEventListener('click', newGame);
        buttons.appendChild(newButton);
};

function createSelectionButtons() {
    const selectionButtons = ['rock', 'paper', 'scissors'];
    for (selection of selectionButtons) {
        const newButton = document.createElement('button');
        newButton.setAttribute('id', selection);
        newButton.classList.add('humanSelection');
        newButton.textContent = selection.toUpperCase();
        newButton.addEventListener('click', function (e) {playRound(e.target.id);});
        buttons.appendChild(newButton);
    }
};

newGame();