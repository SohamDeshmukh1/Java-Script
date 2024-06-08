let btns = document.querySelectorAll('.box');
let resbtn = document.querySelector('.reset');
let turns = document.querySelector('.Turn');
let turnO;
function updateturns() {
    if (turnO == true) {
        turns.textContent = "X's Turn";
        turnO = false;
    }
    else {
        turns.textContent = "O's Turn";
        turnO = true;
    }
}
let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

btns.forEach((boxes)=>
{
    boxes.addEventListener('click',()=>{
        if(turnO){
            boxes.textContent = "O";
            updateturns();
        }
        else{
            boxes.textContent = "X";
            updateturns();
        }    
        boxes.disabled = true;
    })
})
resbtn.addEventListener('click',()=>{
    btns.forEach((boxes)=>{
        boxes.textContent = "";
        boxes.disabled = false;
    });
});