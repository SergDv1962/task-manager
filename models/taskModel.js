import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: String,
    default: false
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;