require('../src/db/mongoose')
// const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('63f68c9ac64483bdcc4ae2a9', { age: 5 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 5 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndRemove('63f66193474be7630cee36c5').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeAndCount('63f68c9ac64483bdcc4ae2a9', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const delTaskAndCount = async (id, taskDel) => {
    const task = await Task.findByIdAndDelete(id, { taskDel })
    const count = await Task.countDocuments({ completed: false })
    return count
}

delTaskAndCount('63f661a994c250d31a428c44').then((count) => {
    console.log('Incompleted Task: ' + count)
}).catch((e) => {
    console.log(e)
})