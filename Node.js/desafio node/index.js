const express = require("express")
const app = express()
const uuid = require("uuid")
const port = 3300
app.use(express.json())



const orders = []

const checkMethod = (request,response, next)=>{
    const method = request.method
    const url = request.url
    console.log(`${method}  & ${url}`)
    next()
}

const checkOrderId = (request, response, next)=>{
    const {id} = request.params
    const index = orders.findIndex(Element=> Element.id === id)
    if ( index < 0 ){
        return response.status(404).json({error:"Order not found"})
    }
    request.orderId = id
    request.orderIndex = index
    next()
}

app.get('/order',(request,response)=>{
    return response.json(orders)
})

app.post('/order',checkMethod, (request, response)=>{
    const {order, clientName, price} = request.body
    const newOrder = { id:uuid.v4(), order, clientName, price, status:"Em Preparação"}
    orders.push(newOrder)
    return response.status(201).json(newOrder)
})

app.put('/order/:id', checkOrderId,checkMethod,(request, response)=>{
    const {order, clientName, price} = request.body
    const id = request.orderId
    const index = request.orderIndex
    const updateOrder = {id ,order, clientName, price, status:"Em Preparação"}
    orders[index] = updateOrder
    return response.json(updateOrder)    
})

app.delete('/order/:id', checkOrderId,checkMethod, (request, response)=>{
    const index = request.orderIndex
    const {id} = request.params
    orders.splice(index,1)
    return response.status(204).json()
})

app.get('/order/:id', checkOrderId,checkMethod, (request, response)=>{

    const index = request.orderIndex
    const specificOrder = orders[index]

        return response.json(specificOrder)
})

app.patch('/order/:id', checkOrderId,checkMethod, (request,response)=>{
    const index = request.orderIndex
    orders[index].status = "Pronto"
    return response.json(orders[index])

})

app.listen(port, ()=>{
    console.log(`🚀 Started Server on port ${port}🚀`)
})
