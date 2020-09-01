const curry = require('./curry')

module.exports = curry(
  (pred, cb, args) => curry(pred)(args) ? curry(cb)(args) : args
)
