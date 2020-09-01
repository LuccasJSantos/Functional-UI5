const curry = require('./curry')

module.exports = curry(
  (prop, obj) => obj[prop]
)
