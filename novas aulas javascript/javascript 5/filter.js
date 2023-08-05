/*
    FILTER 
        -Cria um novo Array, a partir do array percorrido (array original)
        - Cria um novo array APENAS com os elementos filtrados 
        - aceita 3 parametros

            -item do array
            -index 
            -array completo

                return TRUE => item atual passa para o novo array
                return FALSE => item atual NÃO passa para o novo array 


*/


///////////RETORNA OS NUMEROS MAIORES QUE 100 DO ARRAY ORIGINAL ////////////////////////
const list = [20, 234, 12, 17, 541, 6, 87, 275, 1000]

const newlist = list.filter(item =>{
    if (item > 100) return true 
    else return false
})

console.log(newlist)

///////////RETORNA OS NUMEROS MENORES QUE 100 DO ARRAY ORIGINAL ////////////////////////

const list2 = [20, 234, 12, 17, 541, 6, 87, 275, 1000]

const newlist2 = list2.filter(value => value < 100  )
console.log(newlist2)


///////////RETORNA OS NUMEROS MENORES QUE 100 E PARES DO ARRAY ORIGINAL ////////////////////////

const list3 = [20, 234, 12, 17, 541, 6, 87, 275, 1000]

const newlist3 = list3.filter(value =>{
    if(value <=100 && value % 2 ===0){
        return true
    }else{
        return false
    }
})
console.log(newlist3)

///////////////////////////////////////        DESAFIO    ////////////////////////////////////////////////////////////////

const companies = [
    {name:'Samsung', marketValue:50 , CEO:'Kim hyun suk', FoundeOn:1938 },
    {name:'Microsoft', marketValue:415 , CEO:'Satya Nadella', FoundeOn:1975 },
    {name:'Intel', marketValue:117 , CEO:'Brian Krzanick', FoundeOn:1968 },
    {name:'Facebook', marketValue:383 , CEO:'Mark zuckerberg', FoundeOn:2004 },
    {name:'Spotify', marketValue:30 , CEO:'Daniel Ek', FoundeOn:2006 },
    {name:'Apple', marketValue:845 , CEO:'Tim Cook', FoundeOn:1976 }
]

const newCompanie = companies.filter(value =>{
    if(value.marketValue <=200 && value.FoundeOn > 1990 ){
        return true
    }else{
        return false
    }
})
console.log(newCompanie)