/*
MAP => Mapear o nosso array.
- Criar um novo array, a partir do array percorrido (array original)
- Criar um novo array, com a mesma quantidade de itens do array original.
- Aceita 3 parâmetros
    -item do array
    -index
    -array completo
*/



const number = [1,2,3,4,5,6,7,8]

const exemplo = number.map ((item, index, ArrayOriginal) =>{
console.log(item  + ' => item')
console.log(index + ' => index')
console.log(ArrayOriginal + ' => ArrayOriginal')
return 0
})

console.log(exemplo)


const double = number.map (i => {
 const result = i * 2
return result
})

console.log(double)

////////////////////////////////////////////////////////////////////
 const triplo = number.map((numero) => numero * 3 )
 console.log(triplo)

 /////////////////////////////////////////////////////////////////////

const quatro = number.map((number =>{
    const resultado = number * 4
    return resultado
}))
console.log(quatro)
