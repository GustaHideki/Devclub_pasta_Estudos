/* Faça um programa onde leia um número e diga se ele é: 
- ímpar, 
- par, 
- é um número primo e impar,
 - é par e divisível por 5.*/




 const numero= 4
 
 if(numero % 2 ===0){
   
   if(numero % 5 ===0) console.log("O numeor é par e divisível por 5")
   else console.log("O número é par e não divisível por 5")
 }else{
   for (let i=2; i<numero;i++)
   if (numero % i ===0){
      console.log("Ele é impar, mas não é primo")
      break
   }else{
       if (i===numero - 1) console.log('Ele é um numero primo')
 }
}