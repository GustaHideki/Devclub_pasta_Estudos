/* 

Estrutura de repetição - LOOP

FOR


1} INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela 

2} CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                                Ele irá verificar antes de cada iteração.   

3} EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta.


// Estrutura de um laço for:

for ([Inicialização]; [Condição]; [Expressão Final]){
    seu codigo aqui
}


*/



for (let i = 0; i <= 15; i++) {
    console.log(i)
}



for (let i = 15; i > 2; i--) {
    console.log(i)
}


const users = ["gustavo", "gabriel", "marcio", "elaine", "rafael", "melissa", "willian", "Erthal", "gustavo", "gabriel", "marcio", "elaine", "rafael", "melissa", "willian", "Erthal", "gustavo", "gabriel", "marcio", "elaine", "rafael", "melissa", "willian", "Erthal", "gustavo", "gabriel", "marcio", "elaine", "rafael", "melissa", "willian", "Erthal", "gustavo", "gabriel", "marcio", "elaine", "rafael", "melissa", "willian", "Erthal",]

for(let i = 0; i < users.length; i++){
    console.log(users[i])
}