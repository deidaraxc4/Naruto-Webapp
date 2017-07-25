var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , ip: '73.137.53.70', weather: 'rain'});
});


module.exports = router;
