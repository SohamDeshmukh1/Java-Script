import { countryList } from "./code.js";
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";
const drops = document.querySelectorAll('.dropdown select');

for (let dropdown in drops){
    for(let curreny in countryList){
        let option = document.createElement('option');
        option.innerHTML = curreny;
        option.value = curreny;
        dropdown.append(curreny);
    }
}
const amount = document.querySelector('#input');
const amount2 = document.querySelector('#output');
const finalEx = document.querySelector('#exchange');
const btn = document.querySelector('#ex');


