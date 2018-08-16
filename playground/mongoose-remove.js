const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((result) => {
  console.log(result);
});*/

Todo.findOneAndRemove({_id: '5b74dec2729a1d7e2228c4c5'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b74dec2729a1d7e2228c4c5').then((todo) => {
  console.log(todo);
});
