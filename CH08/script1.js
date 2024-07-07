// script was mess so new file 

let mode = document.querySelector('#change');
mode.addEventListener("click",change1);

let body = document.querySelector('body');
body.setAttribute("class",'light');


function change1(){ 
    console.log("mode will change");

        if (body.getAttribute('class')== 'light') {
            body.removeAttribute('class');
            body.setAttribute("class", 'dark');
        } else {
            body.removeAttribute('class');
            body.setAttribute("class", 'light');
        }

}



