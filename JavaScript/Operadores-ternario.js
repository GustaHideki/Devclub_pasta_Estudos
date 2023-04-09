/*OPERADOR TERNÁRIO OU CONDICIONAL

    ? se
    : se não

*/


const rain = true 

const umbrela = rain ? 'Levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela)


//preciso transferir meu dinheiro

const balance = true 
const isNotBlocked = true
const accountExist = true

const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

console.log(transferOk)