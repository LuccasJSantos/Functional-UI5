const curry = require('../curry')
const clone = require('../clone')
const getModel = require('./getModel')

module.exports = curry(
  (parent, name, args) => {
    const model = getModel(parent, name)

    model.setData(args)

    return clone(args)
  })
