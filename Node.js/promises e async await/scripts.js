

const convertButton = document.querySelector(".convertButton") //seleciona o botao com a classe: "convertButton" no arquivo html 
const currencySelect = document.querySelector(".currency-select")

const convertValues = async ()=> {
    const inputCurrencyValue = document.querySelector(".input-currency").value // seleciona o input: "input-currency" no html e cria uma variavel com o nome:"inputCurrencyValue"

    const currencyValueToConvert = document.querySelector(".currency-Value-To-Convert")

    const currencyValueConverted = document.querySelector(".currency-Value")

const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response=> response.json())


    const dolarToday = data.USDBRL.high // cria uma variavel que define um valor para moeda dolar
    const euroToday = data.EURBRL.high // cria uma variavel que define um valor para moeda euro
   


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertedValue) //  Mostra o valor da operação realizada no console.log
};

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assents/dolar.png"
    }
    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues) // mostra o evento "click" do button 