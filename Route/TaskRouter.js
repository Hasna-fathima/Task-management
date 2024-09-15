import express from "express";
import TaskController from "../Controller/TaskController.js";
const taskRouter=express.Router()

taskRouter.post('/create-Task',TaskController.createTask)
taskRouter.get('/get-Tasks',TaskController.getAllTasks)
taskRouter.get('/task/:id',TaskController.getTaskById)
taskRouter.put('/update-Task/:id',TaskController.updateTask)
taskRouter.delete('/delete-Task/:id',TaskController.deleteTask)


export default taskRouter