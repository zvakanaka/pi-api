const { read } = require('../lib/fsPromises')

module.exports = async function frequency(req) {
  const inFileName = '/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq'
  const fileContents = await read(inFileName)
  const cpuHertz = Number(fileContents)

  const data = {
    MHz: cpuHertz / 1000
  }

  return data
}
