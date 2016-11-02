
/* controller.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: This is where all of the routes to serve the differenct pages will go
 */

var express = require('express');
var router = express.Router();
var todo = require('../models/todo_model.js');

/* GET home page. */
router.get('/', function (req, res) {
	res.redirect('/todo');
});

router.get('/todo', function (req, res) {
	todo.selectAll()
	.then(function (data) {
		var hbsObject = { todo: data };
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/todo/create', function(req, res){
	todo.create(req.body.name)
		.then(function(data){
			console.log('new data ', data)
			res.redirect('/todo');
		});
		
});


router.put('/todo/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;
	todo.update({ completed: req.body.task }, condition)
		.then(function(data){
			console.log('condition', condition, "--", "body task: ", req.body.task);
			res.redirect('/todo');

	});
		
});

router.delete('/todo/delete/:id', function(req, res){
	var condition = 'id = ' + req.params.id;
	todo.delete(condition)
		.then(function(data){
			console.log('deleted this row: ' , data);
			res.redirect('/todo');

		})
})

module.exports = router;
