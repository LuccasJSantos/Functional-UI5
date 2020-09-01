const curry = require('./curry')

module.exports = curry(
  (fn, arr) => arr.map(fn)
)
