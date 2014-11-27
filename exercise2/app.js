var express = require('express');
var path = require('path');
var app = express();

var task2Router = require('./routes/task2');
app.use('/task2', task2Router);

var task3 = require('./routes/task3');
app.use('/task3', task3);

// Setup serving static assets
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup initial routing - index
app.get('/', function(req, res) {
  res.render('index', {title: 'Server-side Scripting - Exercise 2'});
});

// Start the server
var server = app.listen(3000, function(){
  console.log('App listening at http://localhost:3000');
});

// var task2 = require('./routes/task2');
// app.get('/task2', task2);

// module.exports = function(req, res){
//   res.send('Task 2');
// };

// // var task2 = function(req, res){
// //   res.send('Task 2');
// // };

// module.exports = task2;

