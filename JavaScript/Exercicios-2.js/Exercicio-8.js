/*  Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
 - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
 - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
 Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.*/


const number1 =1
const number2 =3
const number3 =5
const number4 =7

if(number1 %2 ===0 && number2 %2 ===0 && number3 %2 ===0 && number4 %2 ===0 ){
    console.log("Todos os números são PARES")
}else if (number1 %2 !==0 && number2 %2 !==0 && number3 %2 !==0 && number4 %2 !==0){
    console.log("Todos os números são Ímpares")
}else{
    console.log("Há números Pares e Impares")
}