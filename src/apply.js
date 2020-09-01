const curry = require('./curry')

module.exports = curry(
  (...args) => fn => curry(fn)(...args)
)
