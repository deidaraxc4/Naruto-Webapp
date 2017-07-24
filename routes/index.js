var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , ip: req.ip, weather: 'rain'});
});


module.exports = router;
