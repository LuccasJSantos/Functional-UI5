const curry = require('./curry')

module.exports = curry(
  (fn, a, b) => curry(fn)(b, a)
)
