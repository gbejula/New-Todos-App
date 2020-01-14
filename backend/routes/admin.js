const express = require('express');

const router = express.Router();

const showsController = require('../controllers/shows');

router.post('/api/todos', showsController.postAllTodos);                                             
router.get('/api/todos', showsController.getAllTodos);


module.exports = router;