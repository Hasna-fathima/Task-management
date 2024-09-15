import Task from '../model/TaskModel.js'
import mongoose from 'mongoose'


// create new Task
 const createTask=async(req,res)=>{
    try{
        const {title,description}=req.body
        const newTask=new Task({title,description})
        await newTask.save()
        res.status(201).json(newTask)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}



//get all Tasks 
const getAllTasks=async(req,res)=>{
    try {
        const tasks = await Task.find();
        if (!tasks) {
          return res.status(404).json({ error: 'Tasks are not found' });
        }
        return res.status(200).json(tasks);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    };




    //get Task by is
    const getTaskById=async(req,res)=>{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json('invalid task id')
        }
          try {
        
              const task = await Task.findById(id);
              if (!task) {
                  return res.status(404).send('Task not found');
              }
              res.status(200).send(task);
          } catch (err) {
              res.status(500).send(err);
          }
      }
      

      //update Task
const updateTask=async(req,res)=>{
    try{
        const {title,description,completed}=req.body
        const task=await Task.findById(req.params.id)
        if(!task){
            res.status(404).json({message:'Task not found'})
        }
        task.title=task||task.title;
        task.description=completed!==undefined?completed:task.completed;
        await task.save()
        res.status(200).json(task)

    }
    catch(error){
        res.status(500).json({message:error.message})

    }
}



// delete Task
const deleteTask=async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({message:'Task not found'})
        }
        await task.remove()
        res.sttus(200).json({message:'Task deleted'})

    }catch(error){
        res.status(500).json({message:error.message})

    }
}




const TaskController={createTask,getAllTasks,getTaskById,updateTask,deleteTask}
export default TaskController