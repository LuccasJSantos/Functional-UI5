const curry = require('./curry')

module.exports = curry(
  (args, arr) => [args, ...arr]
)
