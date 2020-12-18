const curry = require('../curry')

module.exports = curry(
  (parent, name, args) => {
    if (!parent.setModel) {
      const error = new Error('Parent doesn\'t have \'setModel\' function')
      console.info(error)
      return undefined
    }

    const model = new sap.ui.model.json.JSONModel(args)

    parent.setModel(model, name)

    return model
  })
