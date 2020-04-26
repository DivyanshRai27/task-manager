const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
})



// const me = new User({
//     name: 'Danny',
//     email: 'divyanshrai27@gmail.com',
//     password: 'testing1234',
//     age: '21'
// })
 
// me.save().then((me) => {
//     console.log(me)
// }).catch(() => {
//     console.log('Error',error)
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

// const task = new Task({
//         description: 'Do development',
//         competed: true
//     })

//     task.save().then(() => {
//             console.log(task)
//         }).catch((error) => {
//             console.log(error)
//         })