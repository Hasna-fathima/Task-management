import  mongoose from  'mongoose';
const TaskSchema = new mongoose.Schema(
  {
title: {type: String, required: true},
description: { type: String},
completed: { type: Boolean,default:false },
dueDtae:{type:Date},
category:{type:String}
  },
  { timestamps: true }
);

const Task= mongoose.model("Task", TaskSchema);
export default Task