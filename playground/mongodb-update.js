// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unab;e to connect to MongoDb server');		
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').find().toArray().then((result)=>{
		console.log(result);
	},(err)=>{
		console.log(err);
	});

	//db.collection('Users').insertOne({name: 'Martin', age: 38, location: "Poland"});
	
	db.collection('Users').findOneAndUpdate({name: "Martin"},{$set: {age: '38'}}, {returnOriginal: false})
	.then((result)=>{
		console.log(JSON.stringify(result, undefined, 2));
	},(err)=>{
		console.log('Can not find item', err);
	})

	

	db.close();
}); 	 	