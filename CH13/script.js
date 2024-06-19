// Dont mind the small project;

const url ='https://cat-fact.herokuapp.com/facts';

let p1 = document.querySelector('#fact');
let btn1 = document.querySelector('#button');
let getdata = async()=>{
    console.log(`Retriving Data`);
    let i = await fetch(url);
    let data = await i.json();
    console.log(data[0]);
    /* `p1.innerHTML` is setting the HTML content inside the element selected by the variable `p1`. In
    this case, it is setting the HTML content to be the text of the first fact retrieved from the
    API response. */
    p1.innerHTML = data[0].text;
}
// btn1.addEventListener('click',getdata);
// above is done with async await method 
// now with promise chain

// function pro (){
//     fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         p1.innerHTML = data[0].text;   
//     })
// }
// btn1.addEventListener('click',pro);

// this is too much confusing so i will prefer async and awit method only
