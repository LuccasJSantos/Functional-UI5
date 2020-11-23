const curry = require('./curry')

module.exports = curry(
  (args, fn) => fn.call(args)
)
