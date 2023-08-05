


const companies = [
    {name:'Samsung', marketValue:50 , CEO:'Kim hyun suk', FoundeOn:1938 },
    {name:'Microsoft', marketValue:415 , CEO:'Satya Nadella', FoundeOn:1975 },
    {name:'Intel', marketValue:117 , CEO:'Brian Krzanick', FoundeOn:1968 },
    {name:'Facebook', marketValue:383 , CEO:'Mark zuckerberg', FoundeOn:2004 },
    {name:'Spotify', marketValue:30 , CEO:'Daniel Ek', FoundeOn:2006 },
    {name:'Apple', marketValue:845 , CEO:'Tim Cook', FoundeOn:1976 }
]

// Adicionar 10% do valor de mercado a todas as companias -> MAP
// Filtrar somente empresas fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const newValueCompany = companies.map(company =>{ company.marketValue = company.marketValue + company.marketValue /10
return company
})
.filter(company=> company.FoundeOn < 1990)
.reduce((acc,company)=> acc + company.marketValue,0)
console.log(newValueCompany)









