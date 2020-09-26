const exec = require('util').promisify(require('child_process').exec)

module.exports = async function voltage() {
  try {    
    const command = await exec('vcgencmd measure_volts core')
    const voltageRegexResults = /^volt=(?<voltage>.*)V$/.exec(command.stdout)
    if (voltageRegexResults) {
      const { groups: { voltage } } = voltageRegexResults
      
      const data = {
        voltage: Number(voltage)
      }
      return data
    }
    throw new Error(`Could not parse voltage`)
  } catch (error) {
    const customError = `Could not get voltage`
    return { error: customError }
  }
}
