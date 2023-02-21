const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()



//mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('task').deleteMany({
        description: 'Azul'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

