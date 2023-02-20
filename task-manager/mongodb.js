const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

console.log('................')

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    
    console.log('................')
    
    if(error){
        return console.log('Error al conectar la base de datos')
    }

    console.log('Base de datos conectada')
})