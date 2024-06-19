// Dont mind the small project;

const url ='https://cat-fact.herokuapp.com/facts';

let p1 = document.querySelector('#fact');
let btn1 = document.querySelector('#button');
let getdata = async()=>{
    console.log(`Retriving Data`);
    let i = await fetch(url);
    let data = await i.json();
    console.log(data[0]);
    p1.innerHTML = data[0].text;
}
// btn1.addEventListener('click',getdata);
// above is done with async await method 
// now with promise chain

function pro (){
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        p1.innerHTML = data[0].text;   
    })
}
btn1.addEventListener('click',pro);