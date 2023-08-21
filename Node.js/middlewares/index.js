const express = require("express")
const app = express()
const uuid = require("uuid")
const port = 3000
app.use(express.json())

/* 

    - Query Params => meusite.com/users?nome=Gustavo&age=19   // FILTROS
    - Route Params => /users/2          // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => {"name": "Gustavo" "age": 19}

    - GET       => Buscar informações no back-end
    - POST      => Criar informações no back-end
    - PUT/PATCH => alterar/Atulizar informações no back-end
    -DELETE     => Deletar informações no back-end

    -MIDDLEWARES => INTERCEPTADOR => tem o poder de parar ou alterar dados da requisição

    */

const users = []

const checkuserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: "user not found" })
    }

    request.userIndex = index
    request.userId = id
    next()
}

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body
    const user = { id: uuid.v4(), name, age }
    users.push(user)
    return response.status(201).json(user)
})

app.put("/users/:id", checkuserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, name, age }


    users[index] = updateUser
    return response.json(updateUser)
})


app.delete("/users/:id",checkuserId, (request, response) => {
    const index = request.userIndex
    users.splice(index, 1)
    return response.status(204).json()

})

app.listen(port, () => {
    console.log(`🚀 Server Started on port: ${port}`)
})