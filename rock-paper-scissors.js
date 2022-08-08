const computerScore = document.querySelector('#computerScore');
const humanScore = document.querySelector('#humanScore');
const matchResultLeft = document.querySelector('#matchResultLeft');
const matchResultRight = document.querySelector('#matchResultRight');
const matchDetailsLeft = document.querySelector('#matchDetailsLeft');
const matchDetailsRight = document.querySelector('#matchDetailsRight');
const gameResultLeft = document.querySelector('#gameResultLeft');
const gameResultRight = document.querySelector('#gameResultRight');
const buttonHeader = document.querySelector('#buttonHeader');
const buttons = document.querySelector('#buttons');

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
        matchResultLeft.textContent = `EVERYONE WINS!`;
        matchResultRight.textContent = `EVERYONE WINS!`;
        matchDetailsLeft.textContent = `Both players chose ${computerSelection.toLowerCase()}`;
        matchDetailsRight.textContent = `Both players chose ${computerSelection.toLowerCase()}`;
        return "11";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        matchResultLeft.textContent = `YOU WIN!`;
        matchResultRight.textContent = `YOU WIN!`;
        matchDetailsLeft.textContent = `${rockWin}`;
        matchDetailsRight.textContent = `${rockWin}`;
         return "01";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        matchResultLeft.textContent = `YOU WIN!`;
        matchResultRight.textContent = `YOU WIN!`;
        matchDetailsLeft.textContent = `${paperWin}`;
        matchDetailsRight.textContent = `${paperWin}`;
         return "01";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        matchResultLeft.textContent = `YOU WIN!`;
        matchResultRight.textContent = `YOU WIN!`;
        matchDetailsLeft.textContent = `${scissorsWin}`;
        matchDetailsRight.textContent = `${scissorsWin}`;
         return "01";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        matchResultLeft.textContent = `COMPUTER WINS!`;
        matchResultRight.textContent = `COMPUTER WINS!`;
        matchDetailsLeft.textContent = `${rockWin}`;
        matchDetailsRight.textContent = `${rockWin}`;
         return "10";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        matchResultLeft.textContent = `COMPUTER WINS!`;
        matchResultRight.textContent = `COMPUTER WINS!`;
        matchDetailsLeft.textContent = `${paperWin}`;
        matchDetailsRight.textContent = `${paperWin}`;
        return "10";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        matchResultLeft.textContent = `COMPUTER WINS!`;
        matchResultRight.textContent = `COMPUTER WINS!`;
        matchDetailsLeft.textContent = `${scissorsWin}`;
        matchDetailsRight.textContent = `${scissorsWin}`;
        return "10";
    } else {
        matchResultLeft.textContent = "Try Again!";
        matchResultRight.textContent = "Try Again!";
        matchDetailsLeft.textContent = "Try Again!";
        matchDetailsRight.textContent = "Try Again!";
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
        gameResultLeft.textContent = "COMPUTER WINS!";
        gameResultRight.textContent = "COMPUTER WINS!";
        buttonHeader.textContent = "COMPUTER WINS!";
    } else if (humanWins > computerWins) {
        gameResultLeft.textContent = "YOU WIN!";
        gameResultRight.textContent = "YOU WIN!";        
        buttonHeader.textContent = "YOU WIN!";        
    } else {
        gameResultLeft.textContent = "EVERYONE WINS!";
        gameResultRight.textContent = "EVERYONE WINS!";
        buttonHeader.textContent = "EVERYONE WINS!";
    };
}

function newGame() {
clearGame()
removeButtons();
createSelectionButtons();
};

function clearGame() {
    game.computerWins = 0;
    game.humanWins = 0;
    computerScore.textContent = game.computerWins;
    humanScore.textContent = game.humanWins;
    matchResultLeft.textContent = "";
    matchResultRight.textContent = "";
    matchDetailsLeft.textContent = "";
    matchDetailsRight.textContent = "";
    gameResultLeft.textContent = "";
    gameResultRight.textContent = "";
    buttonHeader.textContent = "CHOOSE YOUR FATE!";
}

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