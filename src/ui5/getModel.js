const curry = require('../curry')

module.exports = curry(
  (parent, name) => {
    if (!parent.getModel) {
      const error = new Error('Parent doesn\'t have \'getModel\' function')
      console.error(error)
      throw error
    }

    const model = parent.getModel(name)

    if (!model) {
      const error = new Error(`Provided model '${name}' doesn't exist`)
      console.error(error)
      throw error
    }

    return model
  })
