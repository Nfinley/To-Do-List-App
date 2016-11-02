/* todo.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: Will contain code to call the ORM functions using 
    todo list specific input for the ORM.
 */
var orm = require('../config/orm.js');

var todo = {
    selectAll: function() {
        // This runs when the user goes to the /todo page when called in the controller.js file
        return orm.selectAll('todoList')
            .then(function(rows) {
                // console.log("in controller: ", rows);
                return rows;

            })

    },

    create: function(value) {
    	return orm.insertTask('todoList', value)
			.then(function(rows) {
		            console.log("inserted rows: ", rows);
		            return rows;

		    })
			.catch(function(err) {
                console.log(err);
            })
    },
    update: function(completedVal, condition){
    	return orm.updateTask('todoList', completedVal, condition)
    		.then(function(rows){
    			console.log("updated rows: ", rows);
    			return rows;
    		})

    },

    delete: function(condition){
    	return orm.deleteTask('todoList', condition)
    		.then(function(rows){
    			console.log("DELETED row: ", rows);
    			return rows;
    		})
    }



};


module.exports = todo;
