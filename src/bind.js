const curry = require('./curry')

module.exports = curry(
  (...args) => fn => Function.bind.apply(fn, [null, ...args])
)
