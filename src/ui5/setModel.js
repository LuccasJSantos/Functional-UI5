const curry = require('../curry')

module.exports = curry(
  (parent, name, args) => {
    if (!parent.setModel) {
      console.groupCollapsed('FunctionalUI5')
      console.trace('Parent doesn\'t have \'setModel\' function')
      console.groupEnd()
      return undefined
    }

    const model = new sap.ui.model.json.JSONModel(args)

    parent.setModel(model, name)

    return model
  })
