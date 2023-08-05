
const list = [
    { name: 'Gustavo', vip: true },
    { name: 'Gabriel', vip: false },
    { name: 'Melissa', vip: true },
    { name: 'Rafael', vip: false },
    { name: 'Marcio', vip: true },
    { name: 'Elaine', vip: true },
    { name: 'Yuri', vip: false },
    { name: 'Cidy', vip: false },
]

// Vip: pulseira preta
// Não vip: pulseira verde

const newList = list.map(users => {
    let braceletColor

    if (users.vip === true) {
        braceletColor = 'pulseira Black'
    } else {
        braceletColor = 'pulseira green'
    }

    const newUser = {
        name: users.name,
        braceletColor: braceletColor
    }
    return newUser
})
console.log(newList)

/////////// 2 Forma de resolver o mesmo problema ////////////

const newlist = list.map(users =>{
    const newUser ={
        name: users.name,
        braceletColor: users.vip ? 'Pulseira Black' : 'Pulseira Green'
    }
    return newUser
})

console.log(newlist)


/////////////////////////   DESAFIO      ///////////////////////////////////////


const students = [
    {name: 'Gustavo', testGrade:10},
    {name: 'Gabriel', testGrade:4},
    {name: 'Melissa', testGrade:8},
    {name: 'Rafael', testGrade:9},
    {name: 'Marcio', testGrade:2},
    {name: 'Elaine', testGrade:1},
    {name: 'Willian', testGrade:5},
    {name: 'Murillo', testGrade:8},
]

// faça uma lista onde quem tirou nota >ou= a 5 está aprovado, quem tirou nota < que 5 está reprovado

const newBoletim = students.map(student =>{
    let newNota
    if(student.testGrade >= 5){
        newNota = 'APROVADO'
    }else{
        newNota = 'REPROVADO'
    }
    const mediaFinal ={
        name: student.name,
        situação: newNota
    }
    return mediaFinal

})
console.log(newBoletim)


/////////// 2 Forma de resolver o mesmo problema ////////////

const alunos = students.map(student=>{
    return{
        name: student.name,
        situação: student.testGrade >= 5 ? 'APROVADO' : 'REPROVADO'
    }
})  

console.log(alunos)
