const mongoose = require('mongoose')

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

module.exports = Task