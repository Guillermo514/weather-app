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

const bcryt = require('bcryptjs')

const myFuction = async () => {
    const password = 'ComPass!'
    const hashedPassword = await bcryt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcryt.compare('ComPass!', hashedPassword)
    console.log(isMatch)
}

myFuction()