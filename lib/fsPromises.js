async function read(fileName, encoding = 'utf8') {
  const contents = await fsPromises.readFile(fileName, { encoding: 'utf8' })

  return contents
}

module.exports = {
  read
}
