const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({

    title: {
        type: String
    },

    description: {
        type: String
    },

    priority: {
        type: String
    },

    isComplete: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

module.exports = mongoose.model("todo", TodoSchema)