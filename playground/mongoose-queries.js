const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
var id = "5b73fdca364f42c2099d7d7b11";

if(!ObjectId.isValid(id)) {
  console.log('Id not valid');
}*/
/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todos) => {
  console.log('Todo', todos);
});*/
/*
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));*/

var userId = "5b73e7e381ab685167f7daa5";

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User:', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
