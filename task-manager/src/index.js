const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// app.post('/users', (req, res) => {
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.post('/tasks', (req, res) => {
    const task = new task(req.body)

    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port)
})