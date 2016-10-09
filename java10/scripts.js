var newGameBtn = document.getElementById('js-newGameButton');
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

setGameElements();
registerListeners();

function registerListeners() {
    newGameBtn.addEventListener('click', newGame);
    pickRock.addEventListener('click', function() { playerPick('Rock') });
    pickPaper.addEventListener('click', function() { playerPick('Paper') });
    pickScissors.addEventListener('click', function() { playerPick('Scissors') });
}

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
        break;
        case 'ended':
            newGameBtn.innerText = 'Try again';
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'block';
        break;
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

function newGame() {
    player.name = prompt('Please, enter your name');

    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints(); 
    }
}

function checkIfGameEnded() {
    if(player.score == 10) {
        alert(`Game over! ${player.name} won: ${player.score} : ${computer.score} `);
        gameState = 'ended';
        setGameElements();    
    } else if(computer.score == 10){
        alert(`Game over! Computer won: ${computer.score} : ${player.score}`);
        gameState = 'ended';
        setGameElements();    
    }
}

function getComputerPick() {
    var possiblePicks = ['Rock', 'Paper', 'Scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';


    if (playerPick == computerPick) {
        return announceTie();    
    } 
    
    if ((computerPick == 'Rock' &&  playerPick == 'Scissors') ||
        (computerPick == 'Scissors' &&  playerPick == 'Paper') ||
        (computerPick == 'Paper' &&  playerPick == 'Rock') ) {
        return setWinner(computer, computerResultElem );
    }

    return setWinner(player, playerResultElem);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function setWinner(winner, winnersElement) {
    winnersElement.innerHTML = 'Wygrana';
    winner.score++;
    winnersElement.style.color = "green";
    afterFinishingRound();
}

function afterFinishingRound() {
    setGamePoints();
    checkIfGameEnded();
}

function announceTie() {
    playerResultElem.innerHTML = "Draw!";
    computerResultElem.innerHTML = "Draw!";
    playerResultElem.style.color = "slategray";
    computerResultElem.style.color = "slategray";
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}


