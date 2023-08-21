const express = require("express")
const app = express()
const port = 3300
app.use(express.json())

app.get('/users/:id', (request, response) => {
    const {name, age} = request.body
    return response.json({name, age })

})

app.listen(port, () => {
    console.log(`Server started on port ${port} `)
})