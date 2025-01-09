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

router.get('/get-todo-by-id/:id', (req, res)=>{ //WRONG! Brings back all
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

    router.get('get-todos-by-done/:done', (req, res)=>{ //WRONG! Doesnt work
        let {done} = req.params
        const filteredTodos = todos.filter(function(todo){
            return todo.done === done
        })
        res.json({filteredTodos})
    })

    router.post('/create-new-todo', (req, res)=>{ //WRONG!
        const newTodo = {
            id: uuidv4(),
            todo: req.body.todoItem,
            done: "false"
        }
        const existingTodo = todos.find(t => t.todos === newTodo.req.body)
        if(existingTodo){
            res.json({message:"Todo already exists"})
        }
        todos.push(newTodo)
        res.json(`New todo created: ${id}, ${done}`)
    })

    router.put('/update-todo', (req, res)=>{ //WRONG!
        const todoId = req.params //Gets the id and saves it as "todoID"
        const updateData = req.body //Gets new info thats sent in
        const todo = todos.find(t => t.id === todoId) //looks for same id
        if(updateData){

        }
    
        res.json(todos)
    })

module.exports = router