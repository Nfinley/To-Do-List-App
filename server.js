/* Server.js file for the To-Do-List-App HW assignment
    Created by: Nigel Finley for the UT BOOTCAMP class
    Date of creation: October 30th, 2016
 */

// ==== DEPENDENCIES ======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('./config/orm.js');

// ====== SETTING UP THE EXPRESS APP ========
var app = express();
var PORT = process.env.PORT || 3000;

// ======view engine setup=======
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// ======== Sets up the EXpress app to handle data parsing =======
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


// ==== Routes using express.Router =====
var controller = require('./controllers/controller');
app.use('/', controller);


orm.selectAll('todoList')
  .then(function(rows){
    console.log(rows);
  })


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('App listening on PORT ' + PORT);
});

module.exports = app;




// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

