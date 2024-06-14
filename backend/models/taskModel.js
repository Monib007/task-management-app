
const { text } = require('express')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('task', taskSchema)