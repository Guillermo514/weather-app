const  mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const datadabeName = 'task-manager'

MongoClient.connect('connectionURL')