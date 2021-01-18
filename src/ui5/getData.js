const curry = require('../curry')
const clone = require('../clone')
const getModel = require('./getModel')

module.exports = curry(
  (parent, name) => {
    return clone(getModel(parent, name).getData())
  })
