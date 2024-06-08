let cho = document.querySelectorAll(".choice");
let comp = document.querySelector('.compScore');
let user = document.querySelector('.userScore');
let txt = document.querySelector('#txt1');

function randstrig() {
    let string = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}
let userwin = true;
let playgame = (userchoice) => {
    let computer = randstrig();
    if (userchoice == computer) {
        txt.textContent = "It's a tie!"
    }
    else {
        if (userchoice == 'rock') {
            userwin = computer == 'paper' ? true : false;
        }
        if (userchoice == 'paper') {
            userwin = computer == 'rock' ? false : true;
        }
        if (userchoice == 'scissor') {
            userwin = computer == 'rock' ? false : true;
        }
    }
}
function score(userwin)
{
    if(userwin){
        user.textContent = parseInt(user.textContent) +  a ;
    }
    else{
        comp.textContent = parseInt(comp.textContent) + a ;
    }
}

cho.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute('id');
        playgame(userchoice);
    })
})


