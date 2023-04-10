/*  Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor*/

const number1 =50
const number2 =25
const number3 =5

if (number1 > number2 && number3 <number1){
    console.log(`${number1} é o maior número`)
}else if(number2 > number1 && number3 <number2){
    console.log(`${number2} é o maior número`)
}else{
    console.log(`${number3} é o maior número`)
}

if (number1 < number2 && number3 >number1){
    console.log(`${number1} É o menor número`)
}else if (number2 < number1 && number3 >number1){
    console.log(`${number2} É o menor número`)
}else{
    console.log(`${number3} É o menor número`)
}
