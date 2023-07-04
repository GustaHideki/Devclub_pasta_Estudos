/* faça um programa que diga se um numero é primo ou nao*/
 const numero = 17


if (numero ==2){
   console.log("É um número primo")}

 for (let i=2; i<numero;i++){
   if (numero % i ==0){
      console.log("não é primo")
      break
   }else if(i==numero-1){
      console.log("É um número primo")
   }}