/* controller.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
    Purpose: This is where all of the sql queries and potential functions are housed    
 */

var db = require('./connection.js');

// Function that will take in the completedVal and returns true if object has a property of specified name
// or false if not
function objToSql(obj) {
    // column1=value, column2=value2,...
    var arr = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + obj[key]);
        }
    }

    return arr.toString();
}

var orm = {
	// This will select all of the data from the database
    selectAll: function(tableInput) {
        return db.query("SELECT * FROM  ??", [tableInput])
            .then(function(rows) {
                return rows[0];
                // console.log(rows[0]);
            })
            .catch(function(err) {
                console.log(err);
            })

    },
    // This will take userinput and put it into the database
    insertTask: function(tableInput, value) {
    	// FIX THESQL INJECTION ISSUE HERE ONCE IT IS WORKING
        return db.query("INSERT INTO " + tableInput + " SET ?", {
                task_name: value
        })
            .then(function(rows) {
                return rows[0];
                // console.log(rows[0]);
            })
            .catch(function(err) {
                console.log(err);
            })

    },
    // This will allow a user to update each task and then update the database
    updateTask: function(tableInput, completedVal, condition) {
    	// FIX THESQL INJECTION ISSUE HERE ONCE IT IS WORKING
        return db.query("UPDATE " + tableInput + " SET " + objToSql(completedVal) + " WHERE " + condition)
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
    deleteTask: function(tableInput, condition) {
        // FIX THESQL INJECTION ISSUE HERE ONCE IT IS WORKING
        return db.query("DELETE FROM " + tableInput + " WHERE " + condition)
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
