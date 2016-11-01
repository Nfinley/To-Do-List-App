/* todo.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: Will contain code to call the ORM functions using 
    todo list specific input for the ORM.
 */
var orm = require('../config/orm.js');

var todo = {
	// not sure how to make this work with a promise. the example is a callback
    selectAll: function() {
        // This runs as soon as the server starts up and pulls all of the info from the database
        return orm.selectAll('todoList')
            .then(function(rows) {
                // console.log("in controller: ", rows);
                return rows;

            })

    },

    create: function(cols, value) {
    	return orm.insertTask('todoList', cols, value)
			.then(function(rows) {
		            console.log("inserted rows: ", rows);
		            return rows;

		    })
			.catch(function(err) {
                console.log(err);
            })
    }



};


module.exports = todo;
