let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');

const userScorePara= document.querySelector('#user-score');
const computerScorePara= document.querySelector('#computer-score');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame=() => { 
    msg.innerText = "Draw game.Play again!";
    msg.style.backgroundColor = "#081b31";
}  ; 

const showWinner = (userWins, userChoice, computerChoice) => {
    if (userWins) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
         msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // generate computer choice
    const computerChoice = getComputerChoice();
    
    if (userChoice === computerChoice) {
        // Draw game
        drawGame();
    }else{
        let userWins = true;
        if(userChoice === 'rock'){
            userWins = computerChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            userWins = computerChoice === 'scissors' ? false : true;
        }else{
            userWins = computerChoice === 'rock' ? false : true;
        }
        showWinner(userWins, userChoice, computerChoice);
    }
};


choices.forEach((choice) => { 
    choice.addEventListener('click', () => {
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});
