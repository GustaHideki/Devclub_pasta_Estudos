const express = require("express")
const app = express()
const port = 300

/*  

- Query Params => meusite.com/users?nome=gustavo&age=19  // FILTROS 
- Route  Params => /users/2        //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO

*/

app.get('/users', (request, response)=>{
    const {name , age, lastname} = request.query
    
    console.log(name, lastname ,age)
    return response.json({name,lastname,age})
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})