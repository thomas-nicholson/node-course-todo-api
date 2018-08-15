//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db/*v3 client*/) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //v3 const db = client.db('TodoApp');

  /*
db.collection('Todos').find({
    _id: new ObjectId("5b73ba39729a1d7e2228b45c")
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/
  /*
db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/

  db.collection('Users').find({name: 'Thomas'}).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });




  //db.close();
  // mongodb v3 client.close();
});
