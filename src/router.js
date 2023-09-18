const express = require('express');
const taskController = require('./controllers/tasksController');

const router = express.Router();
const TasksMiddleware = require('./middlewares/TasksMiddleware');

router.get('/tasks', taskController.getAll);
router.post('/tasks', TasksMiddleware.validateFieldTitle, taskController.createdTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', TasksMiddleware.validateFieldStatus, TasksMiddleware.validateFieldTitle, taskController.updateTask);
router.get('/teste', taskController.Resposta);


module.exports = router;
