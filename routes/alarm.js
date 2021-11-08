var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Set alarm : 06 : 30');
});

router.post('/', function(req, res, next) {
    
    res.send('Set new alarm : 7 :00');
  });

  //TODO 
  router.put('/', function(req, res, next) {
    res.send('Set alarm : 06 : 30');
  });

//TODO 
  router.delete('/', function(req, res, next) {
    res.send('Set alarm : 06 : 30');
  });

module.exports = router;
