const { read } = require('../lib/fsPromises')

module.exports = function temperature(req) {
  const thermalInFileName = '/sys/class/thermal/thermal_zone0/temp'
  const thermalFileContents = await read(thermalInFileName)
  const celsius = Number(thermalFileContents) / 1000
  const fahrenheit = celsius * (9.0 / 5.0) + 32

  const temperatureData = {
    celsius,
    fahrenheit  
  }

  return temperatureData
}
