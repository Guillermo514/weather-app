const express = require('express')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port)
})
