const express = require('express')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFuction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFuction()