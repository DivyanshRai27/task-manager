const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true 
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }

        }
    },
    password:{
        type: 'string',
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain itself')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
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
    password: 'testing1234',
    age: '21'
})
 
me.save().then((me) => {
    console.log(me)
}).catch(() => {
    console.log('Error',error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true,
        trim: true
    },
    competed: {
        type: Boolean,
        default: false
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

// const task = new Task({
//         description: 'Do development',
//         competed: true
//     })

//     task.save().then(() => {
//             console.log(task)
//         }).catch((error) => {
//             console.log(error)
//         })