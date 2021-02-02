const curry = require('../curry')
const modelPromises = require('./modelPromises')

const JSONModel = sap.ui.model.json.JSONModel

module.exports = curry(
  (parent, name, args) => {
    if (!parent.setModel) {
      console.groupCollapsed('FunctionalUI5')
      console.trace('Parent doesn\'t have \'setModel\' function')
      console.groupEnd()
      return undefined
    }

    const model = new JSONModel(args)
    parent.setModel(model, name)

    if (modelPromises[`__${name}__`]) {
      modelPromises[`__${name}__`].resolve(args)
    }

    return model
  })
