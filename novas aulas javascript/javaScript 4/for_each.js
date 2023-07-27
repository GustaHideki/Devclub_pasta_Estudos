/*


obs: não é possivel utilizar o break com o forEach


ForEach (item, index,  array)


*/




const users = [
    { name: "Gustavo", age: 19, number: "(11) 920024461" },
    { name: "Gabriel", age: 17, number: "(11) 920039898" },
    { name: "Marcio",  age: 49,  number: "(11)  973271554" },
    { name: "Elaine",  age: 48,  number: "(11)  987875544" }
]


users.forEach((item, index) => {
    console.log(`${index + 1} ) Nome: ${item.name} Idade: ${item.age} Telefone: ${item.number}`)
});



/*
users.forEach((item, index, array) => {
    console.log(item)
    console.log(index)
    console.log(array)
});*/
