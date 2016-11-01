
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
		})
		
})

// router.post('/cats/create', function (req, res) {
// 	cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
// 		res.redirect('/cats');
// 	});
// });

// router.put('/cats/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	cat.update({ sleepy: req.body.sleepy }, condition, function () {
// 		res.redirect('/cats');
// 	});
// });

module.exports = router;
