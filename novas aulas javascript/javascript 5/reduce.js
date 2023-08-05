/*
 REDUCE 
    - Retorna um valor (pode ser um novo array, um objeto, string, number e etc.)
    -Aceita 4 Parâmetros:
        -ACUMULADOR
        -VALOR ATUAL
        -iNDEX
        -ARRAY COMPLETO 

        obs: os valores de acumulador e valor inicial são obrigatorios

*/


const list = [ 1,2,3,4,5,6,7]

const soma = list.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
}, 0)
console.log(soma)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const companies = [
    {name:'Samsung', marketValue:50 , CEO:'Kim hyun suk', FoundeOn:1938 },
    {name:'Microsoft', marketValue:415 , CEO:'Satya Nadella', FoundeOn:1975 },
    {name:'Intel', marketValue:117 , CEO:'Brian Krzanick', FoundeOn:1968 },
    {name:'Facebook', marketValue:383 , CEO:'Mark zuckerberg', FoundeOn:2004 },
    {name:'Spotify', marketValue:30 , CEO:'Daniel Ek', FoundeOn:2006 },
    {name:'Apple', marketValue:845 , CEO:'Tim Cook', FoundeOn:1976 }
]
const marketValue = companies.reduce((acumulador,value )=>{
    return acumulador + value.marketValue
}, 0)
console.log(marketValue)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cart = [
    {productName:'Abóbora' , pricePerKg:5 , Kg:1},// 5
    {productName:'Pepino' , pricePerKg:3.55 , Kg:1.3},//4,61
    {productName:'Limão' , pricePerKg:1.2 , Kg:2},//2,4
    {productName:'Abacate' , pricePerKg:5.4 , Kg:1.67},// 9,01
    {productName:'Morango' , pricePerKg:11.9 , Kg:3}//35,7
]

const valueFinal = cart.reduce((acumulador, value) =>{
   const soma = value.pricePerKg * value.Kg
   return acumulador + soma
},0)
console.log(`O valor total da compra foi de: R$ ${valueFinal.toFixed(2)}`)