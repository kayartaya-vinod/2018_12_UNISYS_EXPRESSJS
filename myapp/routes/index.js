var express = require('express');
var router = express.Router();


const names = ['Vinod', 'Kumar', 'John', 'Jane', 'Ravi'];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', names });
});

module.exports = router;
