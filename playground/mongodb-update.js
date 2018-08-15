//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db/*v3 client*/) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //v3 const db = client.db('TodoApp');
  /*
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId("5b73c2d6729a1d7e2228b637")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("5b73b6b3c23d67f70e2ed0a5")
  }, {
    $set: {
      name: 'Thomas'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //db.close();
  // mongodb v3 client.close();
});
