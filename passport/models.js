const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    email:String,
    password:String
});
const User = mongoose.model('User',userSchema);

const todoSchema = new Schema({
    todo:String,
    time : { type: Number, default: (new Date()).getTime() } ,
    total_sec : {type:Number,default:86400}
});
const Todo = mongoose.model('Todo',todoSchema);

const deadTodoSchema = new Schema({
    todo:String,
    deadtime:{type:Number,default:Date.now}
});
const DeadTodo = mongoose.model('DeadTodo',deadTodoSchema);

module.exports = {
    "User":User,
    "Todo":Todo,
    "DeadTodo":DeadTodo
}