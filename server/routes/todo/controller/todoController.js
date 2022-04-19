const Todo = require('../model/Todo')

// Create todo
const createTodo = async (req, res) => {
    try {
        const { title, description, priority, isComplete, date } = req.body
        const newTodo = new Todo({
            title: title,
            description: description,
            priority: priority,
            isComplete: isComplete,
            date: date
        })
        const savedTodo = await newTodo.save()
        res.status(200).json({ message: "todo has been saved", payload: savedTodo })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

// Get all
const getAll = async (req, res) => {
    try {
        let allTodos = await Todo.find()
        res.status(200).json({ payload: allTodos })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

// Get one todo
const getOneTodo = async (req, res) => {
    const { id } = req.params
    try {
        let oneTodo = await Todo.findById(id)
        res.status(200).json({ payload: oneTodo })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

// Update todo
const updateTodo = async (req, res) => {
    const { id } = req.params
    try {
        let updateTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        if(updateTodo === null) throw new Error("No todo with id found")
        res.status(200).json({ message: "updated todo", todo: updateTodo })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Delete todo
const deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        let deleteOne = await Todo.findByIdAndDelete(id)
        if(deleteOne === null) throw new Error("No todo with id found")
        res.status(200).json({ message: "todo was deleted", payload: deleteOne })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "there's an error", error: err.message })
    }
}

module.exports = {
    createTodo,
    getAll,
    getOneTodo,
    updateTodo,
    deleteTodo
}