// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unab;e to connect to MongoDb server');		
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	db.collection('Users').find().toArray((err, data)=>{
		if(err) {
			return console.log('Unable to find any', err);			
		}
		console.log(JSON.stringify(data, undefined, 2));
	})

	// db.collection('Users').deleteMany({name: "Martin"}).then((result)=>{
	// 	console.log(result.result, 'deleted:', result.result.n); 
	// }, (err)=>{
	// 	console.log(err);
	// });
	
	///deleteOne - works the same way the example above but it only delete the first item it finds


	//findOneAndDelete
	// db.collection('Users').findOneAndDelete({name: "Gosia"}).then((result)=>{
	// 	console.log(result);
	// },(err)=>{
	// 	console.log(err);
	// })

	//findOneAndUpdate

	db.collection('Users').findOneAndUpdate({name: "Filipo"}, {$set: {age: 7}})
		.then((result)=>{
			console.log(result);
		}, (err)=>{
			console.log(err);
		})

	db.close();
}); 	 	