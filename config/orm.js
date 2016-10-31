/* controller.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: This is where all of the sql queries and potential functions are housed    
 */

var db = require('./connection.js');


var orm = {
	// This will select all of the data from the database
    selectAll: function(tableInput) {
        return db.query("SELECT * FROM  ??", [tableInput])
            .then(function(rows) {
                var rows = rows[0]
                return rows;
                // console.log(rows[0]);
            })
            .catch(function(err) {
                console.log(err);
            })

    },
    // This will take userinput and put it into the database
    insertTask: function(tableInput, task) {
    	// FIX THESQL INJECTION ISSUE HERE ONCE IT IS WORKING
        return db.query("INSERT INTO " + tableInput + " SET ?", {
        	task_name: task
        })
            .then(function(rows) {
                var rows = rows[0]
                return rows;
                // console.log(rows[0]);
            })
            .catch(function(err) {
                console.log(err);
            })

    },
    // This will allow a user to update each task and then update the database
    updateTask: function(tableInput, task, id) {
    	// FIX THESQL INJECTION ISSUE HERE ONCE IT IS WORKING
        return db.query("UPDATE" + tableInput + " SET task_name=" + task + " WHERE id=" + id)
            .then(function(rows) {
                var rows = rows[0]
                return rows;
                // console.log(rows[0]);
            })
            .catch(function(err) {
                console.log(err);
            })

    }
}






module.exports = orm;
