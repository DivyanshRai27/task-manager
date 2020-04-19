const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true 
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Divyansh',
//     age: '21'
// })
 
// me.save().then((me) => {
//     console.log(me)
// }).catch(() => {
//     console.log('Error',error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    competed: {
        type: Boolean
    }
})

const task = new Task({
        description: 'Do Upwork',
        competed: true
    })

    task.save().then(() => {
            console.log(task)
        }).catch((error) => {
            console.log(error)
        })