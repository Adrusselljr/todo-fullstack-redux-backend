const express = require('express')
const router = express.Router()
const { createTodo, getAll, getOneTodo, updateTodo, deleteTodo } = require('./controller/todoController')

router.post('/create-todo', createTodo)
router.get('/get-all', getAll)
router.get('/get-one-todo/:id', getOneTodo)
router.put('/update-todo/:id', updateTodo)
router.delete('/delete-todo/:id', deleteTodo)

module.exports = router