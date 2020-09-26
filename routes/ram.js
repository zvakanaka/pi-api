const exec = require('util').promisify(require('child_process').exec)

module.exports = async function ram() {
  try {    
    const command = await exec('free')
    const regexResults = /^Mem:\s+(?<ramTotal>\d+)\s+(?<ramUsed>\d+)\s+(?<ramFree>\d+)\s+(?<ramShared>\d+)\s+(?<ramCache>\d+)\s+(?<ramAvailable>\d+)$/m.exec(command.stdout)
    const regexResults2 = /^Swap:\s+(?<swapTotal>\d+)\s+(?<swapUsed>\d+)\s+(?<swapFree>\d+)$/m.exec(command.stdout)

    const data = {}
    if (regexResults) {
      Object.entries(regexResults.groups).forEach(([key, value]) => data[key] = Number(value))
      if (!regexResults2) return data
    }
    if (regexResults2) {
      Object.entries(regexResults2.groups).forEach(([key, value]) => data[key] = Number(value))
      return data
    }
    console.log(regexResults, regexResults2)
    throw new Error(`Could not parse ram`)
  } catch (error) {
    console.error(error)
    const customError = `Could not get ram`
    return { error: customError }
  }
}
