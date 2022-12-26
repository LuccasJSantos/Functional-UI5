const curry = require('./curry')
const isArray = require('./isArray')

module.exports = curry(
  (fn, iterable) => {
    if (isArray(iterable)) { return iterable.filter(fn) }

    return Object.fromEntries(
      Object.entries(iterable)
        .filter(([k, v], i) => fn(v, k, i))
    )
  }
)
