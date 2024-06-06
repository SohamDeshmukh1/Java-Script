// Js for practice 

//practice1 
let button1 = document.createElement("button");
button1.style.backgroundColor = "red";
button1.style.color = "white";
button1.innerText = "Click me";
// there is an button as that button we have used before method which puts its even before body so thats why its on same level as the one created now 

let bdy = document.querySelector('body');
bdy.prepend(button1);
//question 2
let para = document.querySelector('.p1');
para.classList.add("p2");
// i accessed the css indirectly by changing the class name in html file
