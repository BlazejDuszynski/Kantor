let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".fieldset__PLN");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".Fieldset__select");

let EUR = 4.4779;
let USD = 3.7364;
let CHF = 4.1364;
let SEK = 0.4411;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnValue = +plnElement.value;
    let currency = currencyElement.value;
    let finalValue;

    switch (currency) {
        case "EUR":
            finalValue = plnValue / EUR;
            break;

        case "CHF":
            finalValue = plnValue / CHF;
            break;
        
        case "USD":
            finalValue = plnValue / USD;
            break;

        case "SEK":
            finalValue = plnValue / SEK;
    }

console.log(finalValue);

resultElement.innerText = finalValue.toFixed(2)+" "+currency;

});