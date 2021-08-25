const curry = require('./curry')
const flat = require('./flat')

module.exports = curry(
  (fn, arr) => flat(arr).map(fn)
)
