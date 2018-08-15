//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db/*v3 client*/) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //v3 const db = client.db('TodoApp');

  /*
db.collection('Todos').insertOne({
    test: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/
  /*
db.collection('Users').insertOne({
    name: 'Thomas',
    age: 22,
    location: 'Newcastle'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  })*/



  db.close();
  // mongodb v3 client.close();
});
