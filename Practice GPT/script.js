let text = document.querySelector('#text');
let btn1 = document.querySelector('#change-text')
let btn2 = document.querySelector('#change-color')
let btn3 = document.querySelector('#remove-intro')
let intro = document.querySelector('#intro')
let header = document.querySelector('haeder');
let content = document.querySelector('#content')
let toggleContent = document.querySelector('#toggle-content');
toggleContent.addEventListener('click', () => {

    if (section.hidden) {
        section.hidden = false; // If section is hidden, show it
    } else { // i was doing the mistake of passing string here pass bool value remember it guys 
        section.hidden = true; // If section is visible, hide it
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.fontSize = '26px';
})
btn1.addEventListener('click', txtChange);
btn2.addEventListener('click', backColor);
btn3.addEventListener('click', remove);

function txtChange() {
    text.textContent = 'U changed the text of this para';
}
function backColor() {
    text.style.background = 'lightblue';
}
function remove() {
    intro.textContent = ".";
}
