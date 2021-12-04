var express = require('express');
var router = express.Router();

//DB set
const Alarm = require('../models/Alarm');


router.get('/', async function(req, res, next) {
  let alarmList = await Alarm.find();
  res.render('alarm', { alarms : alarmList});
});

router.post('/', function(req, res, next) {
    const alarm = req.body.showAlarm
    const newAlarm = new Alarm({
      savedAlarms : alarm,
    
})
 newAlarm.save();
    res.redirect('/alarm');

    res.render('alarm', { alarms : alarmList});

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
