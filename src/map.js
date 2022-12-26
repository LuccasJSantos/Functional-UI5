const curry = require('./curry')
const isArray = require('./isArray')

module.exports = curry(
  (fn, iterable) => {
    if (isArray(iterable)) { return iterable.map(fn) }
    
    return Object.entries(iterable)
        .reduce((acc, [k, v], i) => ({ ...acc, [k]: fn(v, k, i) }), {})
  }
)
