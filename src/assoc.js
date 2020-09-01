const curry = require('./curry')

module.exports = curry(
  (prop, value, obj) => Object.assign({}, obj, { [prop]: value })
)
