const curry = require('../curry')
const getData = require('./getData')

module.exports = curry((parent, name, fn) => {
  const data = getData(parent, name)

  return fn(data)
})
