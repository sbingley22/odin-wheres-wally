var express = require('express');
var router = express.Router();
const Level = require('../models/level')
const Leaderboard = require('../models/leaderboard');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({content: "resource test"});
});

router.get('/levels/:index', async function(req, res, next) {
  const index = req.params.index
  const level = await Level.find({level: index}).exec()

  if (!level) return res.status(404).json({ error: 'Level not found' })

  const responseData = {data: level[0].levelData}

  res.json(responseData)
})

router.get('/leaderboards/:index', async function(req, res, next) {
  const index = req.params.index
  const leaderboard = await Leaderboard.find({level: index})
  .sort({ time: 1})
  .limit(3)
  .exec()

  if (!leaderboard) return res.status(404).json({ error: 'Leaderboard not found' })

  const data = {leaderboard: leaderboard}

  res.json(data)
})

router.get('/leaderboards', async function(req, res, next) {
  const leaderboards = await Promise.all([
    Leaderboard.find({level: 1})
    .sort({ time: 1})
    .limit(3)
    .exec(),
    Leaderboard.find({level: 2})
    .sort({ time: 1})
    .limit(3)
    .exec(),
    Leaderboard.find({level: 3})
    .sort({ time: 1})
    .limit(3)
    .exec(),
  ])

  if (!leaderboards) return res.status(404).json({ error: 'Leaderboards not found' })

  const data = {leaderboards: leaderboards}

  res.json(data)
})

router.post('/leaderboards', async function(req, res, next) {
  const entry = new Leaderboard({
    level: req.body.level,
    name: req.body.name,
    time: req.body.time,
  });

  try {
    await entry.save();
    res.status(201).json({ message: "time saved successfully" });
  } catch (err) {
    console.error('Error saving time:', err);
    res.status(500).json({ error: "Internal server error" });
  }    
})

module.exports = router;
