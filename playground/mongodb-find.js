// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unab;e to connect to MongoDb server');		
	}
	console.log('Connected to MongoDB server');

	// db.collection('Users').find({_id: new ObjectID('5b32adec7a27521bac43604e')}).toArray().then((docs)=> {
	// 	console.log(JSON.stringify(docs, undefined, 2), docs[0]._id.getTimestamp());
	// }, (err) => {
	// 	console.log('Unable to fetch data', err);
	// });

	// db.collection('Users').find().count((err, count)=> {
	// 	console.log('Query count:', count);
	// })

	db.collection('Users').find().count().then((count)=>{
		console.log('Query count:', count);
	}, (err)=>{
		console.log('Unable to count', err);
	})

	db.close();
});