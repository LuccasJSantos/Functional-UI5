const curry = require('../curry')
const filter = require('../filter')
const getData = require('./getData')

module.exports = curry(
  (parent, name, fn) => {
    const data = filter(fn, getData(parent, name))

    return data
  })
