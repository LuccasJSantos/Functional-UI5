const curry = require('../curry')

module.exports = curry(
  (parent, name) => {
    if (!parent.getModel) {
      console.groupCollapsed('FunctionalUI5')
      console.trace('Parent doesn\'t have \'getModel\' function')
      console.groupEnd()
      return undefined
    }

    const model = parent.getModel(name)

    if (!model) {
      console.groupCollapsed('FunctionalUI5')
      console.trace(`Provided model '${name}' doesn't exist. If 'for' function is used, a new model will be created.`)
      console.groupEnd()
      return undefined
    }

    return model
  })
