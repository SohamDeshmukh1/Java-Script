// let p1 = document.querySelector("#new");
// console.dir(p1);

// let p2 = document.getElementById("1");
// console.dir(p2);

//Practice set
let h2 = document.querySelector("h2");
console.log(h2.innerText);

let str = " From Apna college Students";
h2.innerText = h2.innerText + str;

let box = document.querySelectorAll(".Box");//This makes an node array of them
// to accees elements as u want
console.log(box);
let num = 1;
for(div of box){
    div.innerText = `New Unique text ${num}`
    num++;
}

