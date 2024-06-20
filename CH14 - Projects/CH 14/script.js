import { countryList } from "./code.js";

// Correct URL
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

// Select the dropdown elements
const drops = document.querySelectorAll('select');

// Populate dropdowns with currency options
for (let dropdown of drops) {
    for (let currency in countryList) {
        let option = document.createElement('option');
        option.innerHTML = currency;
        option.value = currency;
        dropdown.append(option);
        updateflag();
    }
}


