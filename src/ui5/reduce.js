const curry = require('../curry')
const getData = require('./getData')

module.exports = curry(
  (parent, name, fn, init) => {
    const data = getData(parent, name).reduce(fn, init)

    return data
  })
