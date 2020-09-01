const curry = require('./curry')

module.exports = curry(
  (f, g, h, x) => curry(f)(x) ? curry(g)(x) : curry(h)(x)
)
