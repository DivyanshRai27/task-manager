const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true 
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }

        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Danny',
    email: 'divyanshrai27@gmail.com',
    age: '21'
})
 
me.save().then((me) => {
    console.log(me)
}).catch(() => {
    console.log('Error',error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     competed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//         description: 'Do Upwork',
//         competed: true
//     })

//     task.save().then(() => {
//             console.log(task)
//         }).catch((error) => {
//             console.log(error)
//         })