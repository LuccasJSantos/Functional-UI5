const curry = require('./curry')

module.exports = curry(
  (fn, acc, arr) => arr.reduceRight(fn, acc)
)
