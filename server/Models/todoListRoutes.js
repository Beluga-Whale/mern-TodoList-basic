const mongoose = require('mongoose')

const todolistSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Todo", todolistSchema)