require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ea3ed228706326b5dcd47f2').then((task) => {
    console.log(task)
    return Task.countDocuments({ competed:true })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})