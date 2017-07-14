var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       req.connection.socket.remoteAddress;
  res.send(ip);
});

module.exports = router;
