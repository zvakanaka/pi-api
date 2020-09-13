const router = require('express').Router()
const temperature = require('./temperature')

router.get('/temperature', async (req, res) => {
  const temperatureData = await temperature()
  res.json(temperatureData)
})

module.exports = router
