/*
        functions / funções

        function padrão: --> function (){}

        arrow funtion -> element => {}

        arrow function anonima () => {}

        Não escrevemos "function".
        Além disso, usamos o sinal "=>" para cria-lá,
        o que lembra uma flecha, fazendo jus ao seu nome "Arrow functions"

        // obs: se na arrow function possuir apenas uma linha, nela já está "inclusa" o return

        //obs: se a função possuir apenas um argumento nao é necessário o uso dos parenteses

*/


//function

function saymyname(name) {
    return(`Seu nome é: ${name}`)
    
}


//Arrow Function

const saymyname2 = name => `Seu nome é: ${name}`

console.log(saymyname('Gustavo'))

console.log(saymyname2('Gabriel'))

///////////////////////////////////////////////////////////

const soma = (number1, number2) => number1 + number2

console.log(soma(2,2))


const sub = (number1, number2) => number1 - number2

console.log(sub(10,5))