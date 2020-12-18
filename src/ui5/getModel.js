const curry = require('../curry')

module.exports = curry(
  (parent, name) => {
    if (!parent.getModel) {
      const error = new Error('Parent doesn\'t have \'getModel\' function')
      console.info(error)
      return undefined
    }

    const model = parent.getModel(name)

    if (!model) {
      const error = new Error(`Provided model '${name}' doesn't exist`)
      console.info(error)
      return undefined
    }

    return model
  })
