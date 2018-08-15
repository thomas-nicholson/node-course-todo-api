//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db/*v3 client*/) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //v3 const db = client.db('TodoApp');

  // deleteMany
  /*
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  // deleteOne
  /*
  db.collection("Todos").deleteOne({test: 'Eat lunch'}).then((result) => {
    console.log(result);
  });  */

  // findOneAndDelete
  /*
db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });*/

  /*
db.collection("Users").deleteMany({ name: 'Thomas'}).then((result) => {
    console.log(result);
  });*/

  db.collection("Users").findOneAndDelete({
    _id: new ObjectId("5b73b7390196ec117856ad05")
  }).then((result) => {
    console.log(result);
  })

  //db.close();
  // mongodb v3 client.close();
});
