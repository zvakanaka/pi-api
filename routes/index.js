const router = require('express').Router()
const temperature = require('./temperature')
const frequency = require('./frequency')
const cpu = require('./cpu')
const voltage = require('./voltage')
const ram = require('./ram')

router.get('/cpu-temperature', async (req, res) => {
  const data = await temperature()
  res.json(data)
})

router.get('/cpu', async (req, res) => {
  const data = await cpu()
  res.json(data)
})

router.get('/cpu-frequency', async (req, res) => {
  const data = await frequency()
  res.json(data)
})

router.get('/voltage', async (req, res) => {
  const data = await voltage()
  res.json(data)
})

router.get('/ram', async (req, res) => {
  const data = await ram()
  res.json(data)
})


module.exports = router
