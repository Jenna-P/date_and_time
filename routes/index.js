var express = require('express');
var router = express.Router();



/* GET hom page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'What time is it now?' });
});

router.get('/date', function(req, res, next) {
  res.render('date', { title: 'TODAY' });
  

});

router.get('/time', function(req, res, next) {
  res.render('time', { title: 'TIME' });
});

router.post('/date', (req, res) => {
  
res.redirect("/date");
})

module.exports = router;
