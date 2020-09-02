const curry = require('./curry')

module.exports = curry(
  (fn, arr) => arr.every(fn)
)
