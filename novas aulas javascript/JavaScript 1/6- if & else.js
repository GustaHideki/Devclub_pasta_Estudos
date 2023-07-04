/* 
Controlador de fluxo 

-IF(se)

-ELSE (se não)

Operadores de Comparação

> maior que 

< menor que 

== igual que

*/

const notaDeCorte = 5
const notaDoAluno = 7

if (notaDoAluno > notaDeCorte){
    console.log("Parabéns, você foi aprovado!")
}else{
    console.log("sinto muito, você foi reprovado")
}


const senhaGravada = "abcd"
const senhaDigitada = "abcd"

if(senhaGravada == senhaDigitada){
    console.log("senha correta")
}else{
    console.log("senha incorreta")
}