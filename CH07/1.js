let div1 = document.querySelector(".box");
console.log(div1.setAttribute("class","editedClass1"));

let div2 = document.querySelector(".box1");
console.log(div2.setAttribute("class","editedClass2"));

div2.style.backgroundColor = "white";
div1.style.color = 'black';//node name.style.attribute (we can acces and put css through it too);\
div2.style.color = 'black';

let btn1 = document.createElement("button");
btn1.textContent = "1 HEHEHHE";

let newbtn = document.createElement("button");//Creating a btn
newbtn.innerText = "Submit Form";
div2.append(newbtn);//inserting it at the end of the div

div2.prepend(btn1);

//prepend and append inserts inside a node of dom structure 
//before and after we can put the element before or after any node if we want
