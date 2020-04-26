require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5ea3e9d48ad93469e59a572b', { age:1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})