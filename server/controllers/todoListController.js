const asyncHandler = require('express-async-handler')
const Todo = require('../Models/todoListRoutes')

const todolist = asyncHandler(async (req, res) => {
    const todo = await Todo.find()
    res.status(200).json(todo)
})

const createtodolist = asyncHandler(async (req, res) => {

    const todo = await Todo.create({
        todo: req.body.todo,
        author: req.body.author
    })
    res.status(201).json(todo)
})

const edittodolist = asyncHandler(async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(todo)
})

const deletetodolist = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(201).json({ _id: req.params.id })
})

module.exports = {
    todolist,
    createtodolist,
    edittodolist,
    deletetodolist
}