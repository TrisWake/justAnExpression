const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4

let todos = [
    {
      id: "haf24jd",
      todo: "do laundry",
      done: "false"
    },
    {
      id: "jp2nkl2",
      todo: "wash dishes",
      done: "true"
    }
  ]

router.get('/get-all-todos', (req, res)=>{
    console.log(req.params)
    res.json(todos)
})

router.get('/get-todo-by-id/:id', (req, res)=>{
    let id = req.params.id
        let {newName} = req.body
        const foundID = todos.find(function(element){
            return element.id === id
        })
        if(foundID){
            foundID.name = newName
        res.json({todos})
    }else{
        res.json({message: 'The TODO ID you are looking for does not exist, please check the ID'})
    }
    })

    router.get('get-todos-by-done/:done', (req, res)=>{
        let {done} = req.params
        const filteredTodos = todos.filter(function(todo){
            return todo.done === done
        })
        res.json({filteredTodos})
    })

    router.post('/create-new-todo', (req, res)=>{
        const newTodo = {
            id: uuidv4(),
            todo: req.body.todoItem,
            done: "false"
        }
        todos.push(newTodo)
        res.json(`New todo created: ${id}, ${done}`)
        const existingTodo = todos.find(t => t.todos === newTodo.todo)
            if(existingTodo){
                res.json({message:"Todo already exists"})
        }
        todos.push(newTodo)
    })

    router.put('/update-todo', (req, res)=>{
        const todoId = req.params.id
        res.json(todos)
    })

module.exports = router