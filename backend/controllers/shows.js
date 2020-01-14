const ShowTodo = require('../models/shows')
const pool = require('../util/database')

exports.getAllTodos = (req, res, next) => {
    const text = `SELECT * FROM todos`
    return pool.query(text)
    .then(response => {
        res.status(200).json({
            response
        })
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
};

exports.postAllTodos = (req, res, next) => {
    const {todolist} = req.body;
    console.log(todolist)
    const query = {
        text: `INSERT INTO todos(todolist) VALUES ($1)`, 
        values: [todolist]
    }
    res.send
    // return pool.query(query)
    .then(() => {
        res.status(201).json({
            message: 'todo posted successfully.'
        })
    })
    .catch(err => {
        res.status(400).json({
            err
            
        })
    })
};