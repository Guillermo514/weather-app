require('../src/db/mongoose')
//const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('63f68c9ac64483bdcc4ae2a9', { age: 5 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 5 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

Task.findByIdAndRemove('63f66193474be7630cee36c5').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})