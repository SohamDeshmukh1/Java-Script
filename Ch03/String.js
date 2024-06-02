
// String operations 
let str = "                Hello World     ";
let str1 = str.toUpperCase();
console.log(str1);
let str2 = str.toLowerCase();
console.log(str2);

console.log(str.trim());

// Practice Question
// to make soham -> @soham5 making username
let name = prompt("Enter Your Name to create username");
let username = "@"+ name+ name.length;
alert(`User name is ${username}`);