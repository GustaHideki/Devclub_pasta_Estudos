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

     Finaly => o finaly é opcional, e ele é executado após o try ou o catch

    */

const users = []

app.get('/users', (request, response) => {
    return response.json(users)
})


app.post('/users', (request, response) => {
    try {
        const { name, age } = request.body
        if (age < 18) throw new Error("Only allowed users over 18 years old")
        const user = { id: uuid.v4(), name, age }
        users.push(user)
        return response.status(201).json(user)
    } catch (err) {
        return response.status(400).json({ error: err.message });

    }
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

app.delete('/users/:id', (request, response) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "user not found" })
    }
    users.splice(index, 1)
    return response.status(204).json()


})

app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})

