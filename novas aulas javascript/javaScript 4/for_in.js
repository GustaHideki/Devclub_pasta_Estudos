/*
Estrutura de repetição - LOOP

- FOR IN


*/


const users = {name: "Gustavo", age: 19, street:"Rua Alaska"}


for (const key in users) {
    console.log(`${key} : ${users[key]} `)

}