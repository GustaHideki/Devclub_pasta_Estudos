/*Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente*/

const nota =10

if(nota >=0 && nota <=3 ){
    console.log("Ruim")
}else if(nota >= 4 && nota <=6){
    console.log("Regular")
}else if (nota >= 7 && nota <=8){
    console.log("Bom")
}else if (nota >= 9 && nota<=10){
    console.log("Ótimo")
}
