const express = require("express")
const app = express()
const port = 330


/*  

- Query Params => meusite.com/users?nome=gustavo&age=19  // FILTROS 
- Route  Params => /users/2        //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO

*/

app.get('/users/:id', (request,response)=>{
    const {id} = request.params
    console.log(request)
    return response.json({id})

} )

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})