var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { content: 'home page' } )
});

router.get('/info', function(req, res, next) {
  res.json( { content: 'info' } )
});

module.exports = router;
