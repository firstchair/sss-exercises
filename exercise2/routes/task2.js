// module.exports = function(req, res){
//   res.send('Task 2');
// };


// routes/task2.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('This is task2')
});

router.get('/sub-route', function(req, res){
  res.send('This is a sub-route of task2, and is served @localhost:3000/task2/sub-route');
});

module.exports = router;