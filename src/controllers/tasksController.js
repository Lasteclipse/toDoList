const taskModel = require('../models/tasksModel');

const Resposta =  async (_request, response) => {

    //const tasks = await taskModel.getAll();  
    return response.status(200).json({Message: 'Funcionou'});
};


const getAll =  async (_request, response) => {

    const tasks = await taskModel.getAll();  
    return response.status(200).json(tasks);
};

const createdTask = async (request, response) => {

    const createdTask = await taskModel.createTask(request.body);

    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await taskModel.deleteTask(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;
    await taskModel.updateTask(id, request.body);

    return response.status(204).json();
};


module.exports = {
    getAll,
    createdTask,
    deleteTask,
    updateTask,
    Resposta
};