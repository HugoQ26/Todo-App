const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
		console.log(doc);
	}, (err)=>{
		res.status(400).send(err);
		console.log(err);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
})









// let newTodo = new Todo({
// text: 'Love my job',
// completed: false,
// completedAt: 2017
// });



// newTodo.save().then((res)=>{
// 	console.log(res);
// }, (err)=>{
// 	console.log('unable to save data', err)
// })


