const { read } = require('../lib/fsPromises')
// thank you for showing how to see files a process opens: https://unix.stackexchange.com/a/18872/148675
// `sudo strace -f -o lscpu.trace su pi -c 'lscpu'`

module.exports = async function cpu(req) {
  
  const minCpuMHz = await(read('/sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_min_freq'))
  const maxCpuMHz = await(read('/sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_max_freq'))
  const minMHz = Number(minCpuMHz) / 1000
  const maxMHz = Number(maxCpuMHz) / 1000
  
  const inFileName = '/proc/cpuinfo'
  const fileContents = await read(inFileName)
  const cpuRegexResults = /^Hardware\s*:\s(?<hardware>.*$)\n^Revision\s*:\s(?<revision>.*$)\n^Serial\s*:\s(?<serial>.*$)\n^Model\s*:\s(?<model>.*$)/.exec(fileContents)
  if (cpuRegexResults !== null) {
    const { groups: { hardware, revision, serial, model } } = cpuRegexResults
    
    const data = {
      hardware,
      revision,
      serial,
      model,
      minMHz,
      maxMHz
    }
  
    return data
  }

  const data = {
    hardware: null,
    revision: null,
    serial: null,
    model: null,
    minMHz,
    maxMHz
  }
  return data
}
