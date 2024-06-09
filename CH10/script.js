let cho = document.querySelectorAll(".choice");
let comp = document.querySelector('#compScore');
let user = document.querySelector('#user');
let txt = document.querySelector('#txt1');

let userScore1 = 0;
let compScore1 = 0;

function randstrig() {
    let string = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}

let playgame = (userchoice) => {
    let computer = randstrig();
    if (userchoice === computer) {
        txt.textContent = "It's a tie!";
    } else {
        let userwin = false;
        if (userchoice === 'rock') {
            userwin = computer === 'scissors';
            txt.textContent = userwin ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock";
        } else if (userchoice === 'paper') {
            userwin = computer === 'rock';
            txt.textContent = userwin ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper";
        } else if (userchoice === 'scissors') {
            userwin = computer === 'paper';
            txt.textContent = userwin ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors";
        }

        if (userwin) {
            userScore1++;
        } else {
            compScore1++;
        }
        comp.textContent = compScore1;
        user.textContent = userScore1;
    }
}

cho.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute('id');
        playgame(userchoice);
    });
});
