// here we will do before and after as 1.js was getting a mess
let but1 = document.createElement("button");
let but2 = document.createElement("button");
but1.innerText = "Before";
but2.innerText = "After";


div1.before(but1);
div1.after(but2);

// for remove any element use node_name.remove();

let p12 = document.getElementById("p1");
p12.remove();