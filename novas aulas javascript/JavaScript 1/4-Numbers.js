/* 
Tipos de dados:

string => textos

numbers=> números

boolean => boleano

*/

/*
boleano =
true ou false
*/

const number1 = 32 / 2

const fakeNumber = "32/ 2"

console.log(number1)
console.log(fakeNumber)

/*
object => objeto
*/

const gustavo = {
    name: "gustavo",
    age: 19,
    address: {
        street: "alasca",
        number: 109,
        city: "Santo-André",
        State: "SP",
        country: "Brasil",
        cep: null


    }

}

gustavo.address.country = "Estados Unidos"

console.log(gustavo.address.cep)