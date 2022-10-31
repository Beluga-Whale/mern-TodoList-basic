const express = require('express')
const router = express.Router()
const { todolist, createtodolist, edittodolist, deletetodolist } = require('../controllers/todoListController')

router.get('/', (todolist))

router.post('/create-todo', createtodolist)

router.put('/edit-todo/:id', edittodolist)

router.delete('/delete-todo/:id', deletetodolist)

module.exports = router