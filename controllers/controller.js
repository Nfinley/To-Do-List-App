
/* controller.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: This is where all of the routes to serve the differenct pages will go
 */

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
