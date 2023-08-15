

/*


CLASSES





const person = {
    name: "Gustavo",
    age:19,
    talk: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}


*/


class Person {
    constructor (name,age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Gustavo", 19)
newPerson.talk()


const newPerson1 = new Person("Gabriel", 18)
newPerson1.talk()