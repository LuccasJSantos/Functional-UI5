const curry = require('../curry')
const clone = require('../clone')
const getData = require('./getData')
const setData = require('./setData')

module.exports = curry(
  (parent, name, args) => {
    const modelData = getData(parent, name)
    const data = [...modelData, args]

    setData(parent, name, data)

    return clone(data)
  })
