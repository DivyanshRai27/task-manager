// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Divyansh',
    //     Age: 21
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to connect User')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age:20
    //     }, {
    //         name: 'Rohan',
    //         age:26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'House Clean',
    //         completed: false
    //     }, {
    //         description: 'Do Upwork',
    //         completed: true
    //     }, {
    //         description: 'study',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //          return console.log('Unable to insert documents')
    //       }
        
    //      console.log(result.ops)
    // })
})

