const curry = require('../curry')
const getModel = require('./getModel')

module.exports = curry(
  (parent, name, args) => {
    const model = getModel(parent, name)

    model.setData(args)

    return model
  })
