const buttonConvert = document.querySelector('button')
const selectCurrency = document.querySelector('.seletectValueConvert')



const convertValues = ()=>{
    const currencyValueToConvert = document.querySelector('.currencyValue')
    const currencyValueBr = document.querySelector('.currencyValueBR')
    const inputValue = document.querySelector('input').value
    const dolarValue = 4.70
    const EuroValue = 5.20
    
   if(selectCurrency.value == "dolar"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format( inputValue / dolarValue)
   
  }

  if(selectCurrency.value == 'euro'){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValue / EuroValue)
}
  

  currencyValueBr.innerHTML =  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputValue)

}

const changeCurrency = ()=>{
    const currencyName = document.getElementById('currency-Name')
    const currencyImg = document.querySelector(".currency-Img")

    if (selectCurrency.value == "dolar"){
        currencyImg.innerHTML = "Dolar"
        currencyImg.src = "./assents/dolar.png"
    }

    if (selectCurrency.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }
    convertValues()
}






selectCurrency.addEventListener('change', changeCurrency)
buttonConvert.addEventListener('click', convertValues)