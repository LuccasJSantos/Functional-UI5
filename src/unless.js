const curry = require('./curry')

module.exports = curry(
  (pred, cb, args) => curry(pred)(args) ? args : curry(cb)(args)
)
