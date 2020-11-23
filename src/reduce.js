const curry = require('./curry')

module.exports = curry(
  (fn, acc, arr) => arr.reduce(fn, acc)
)
