const curry = require('../curry')
const map = require('../map')
const getData = require('./getData')

module.exports = curry(
  (parent, name, fn) => {
    const data = map(fn, getData(parent, name))

    return data
  })
