const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()



//mongoose.connect("paste db link", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    const doc =  {name: "Roshan", age: 22}

    db.collection('task').insertOne(doc, (error, result) => {
        if(error){
            console.log('No se pudo insertar el usuario')
        }

        console.log('Documento insertado')
    })

    // db.collection('task').deleteMany({
    //     description: 'Azul'
    // }).then((result) => {    
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})

