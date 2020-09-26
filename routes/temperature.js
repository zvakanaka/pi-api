const { read } = require('../lib/fsPromises')

module.exports = async function temperature(req) {
  const inFileName = '/sys/class/thermal/thermal_zone0/temp'
  const fileContents = await read(inFileName)
  const celsius = Number(fileContents) / 1000
  const fahrenheit = celsius * (9.0 / 5.0) + 32

  const data = {
    celsius,
    fahrenheit  
  }

  return data
}
