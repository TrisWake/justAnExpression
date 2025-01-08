const express = require('express')
const router = express.Router()
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
        let done = req.params.done === 'true'
        const foundDone = todos.find(function(element){
            return element.done === done
        })
        if(foundDone){
            foundDone.done = newName
        res.json({todos})
    }else{
        res.json({message: 'The TODO ID you are looking for does not exist, please check the ID'})
    }
    })

    router.post('/create-new-todo', (req, res)=>{
        const {id, done} = req.body
        const newTodo = {id, done}
        todos.push(newTodo)
        res.json(`New todo created: ${id}, ${done}`)
    })

module.exports = router