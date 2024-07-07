// // Events today
// // Select elements and log them to check if they're selected correctly
let button1 = document.querySelector('#click1');
let button2 = document.querySelector('#dblclick1');
let hovering = document.querySelector('#Hover');

console.log(button1); // Should log the first button element
console.log(button2); // Should log the second button element
console.log(hovering); // Should log the div element

// Add event listeners and log when added
button1.addEventListener('click', onclick1);
button2.addEventListener('dblclick', dblclick1);
hovering.addEventListener('mouseover', hoverme);

console.log('Event listeners added');

// Event handler functions
function hoverme() {
    console.log('Mouse is over the div');
}

function dblclick1() {
    console.log('Button was clicked twice');
}

function onclick1() {
    console.log('Button was clicked');
}

// This method i did easy way tho this is more efficient that 