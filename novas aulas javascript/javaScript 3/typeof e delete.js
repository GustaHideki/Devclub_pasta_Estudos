/* 

operadores typeof e delete

////////////////////////////////////////////


typeof -> Tipo do dado

delete -> deleta o dado 

*/



const  myObject = {
    nome: "Gustavo Hideki", 
    age: 19,
    address: "rua alaska"
}

console.log(typeof myObject.age)

delete myObject.address 

console.log(myObject)