// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unab;e to connect to MongoDb server');		
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos2').insertOne({
	// 	text: 'Something to do 3',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo2', err)
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	// db.collection('Users').insertOne({
	// 	name: 'Martin',
	// 	age: 26,
	// 	location: 'Poland'
	// },(err,result)=>{
	// 	if(err) {
	// 		return console.log('Unable to add some data..',err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })

	db.close();
});