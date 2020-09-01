const curry = require('./curry')

module.exports = curry(
  (n, arr) => arr.slice(0, n)
)
