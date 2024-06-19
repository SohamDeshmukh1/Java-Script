import { countryList } from "./code.js";

let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";
const drops = document.querySelector('.dropdown');
for (let country in countryList){
    console.log(country);
}



const drop = document.querySelector('#from');
const drop2 = document.querySelector('#to');
const amount = document.querySelector('#input');
const amount2 = document.querySelector('#output');
const finalEx = document.querySelector('#exchange');
const btn = document.querySelector('#ex');


