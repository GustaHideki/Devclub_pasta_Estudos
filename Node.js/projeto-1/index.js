const express = require("express")
const uuid = require("uuid")
const app = express()
const port = 3300
app.use(express.json())
/* 

    - Query Params => meusite.com/users?nome=Gustavo&age=19   // FILTROS
    - Route Params => /users/2          // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => {"name": "Gustavo" "age": 19}

    - GET       => Buscar informações no back-end
    - POST      => Criar informações no back-end
    - PUT/PATCH => alterar/Atulizar informações no back-end
    -DELETE     => Deletar informações no back-end

    */

const users = []

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body
    const user = { id: uuid.v4(), name, age }
    users.push(user)
    return response.status(201).json(user)
})


app.put('/users/:id', (request, response) => {
    const { id } = request.params
    const { name, age } = request.body

    const updateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }
    
    users[index] = updateUser

    return response.json(updateUser)
})

app.delete('/users/:id', (request,response)=>{
    const {id} = request.params
    const index = users.findIndex(user => user.id === id)  
    if (index < 0 ){
        return response.status(404).json({message: "user not found"})
    }
    users.splice(index, 1)
    return response.status(204).json()


})

app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})

