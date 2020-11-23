const curry = require('../curry')
const getModel = require('./getModel')

module.exports = curry(
  (parent, name) => {
    return getModel(parent, name).getData()
  })
