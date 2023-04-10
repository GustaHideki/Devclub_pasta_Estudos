/* ESTRUTURAS DE REPETIÇÃO - FOR IN */

const student = {
    name: "Caio",
    age: 26,
    genre: "male",
}

for (let property in student){
    console.log(`${property}:${student[property]}`)
}