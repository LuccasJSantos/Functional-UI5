const curry = require('../curry')
const getData = require('./getData')
const getModel = require('./getModel')
const modelPromises = require('./modelPromises')

module.exports = curry(
  (parent, name) => {
    const model = getModel (parent) (name)

    if (model) {
      return Promise.resolve(getData (parent) (name))
    }

    return new Promise((resolve, reject) => {
      modelPromises[`__${name}__`] = { resolve, reject }
    })
  })
