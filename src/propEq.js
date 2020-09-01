const curry = require('./curry')
const equals = require('./equals')
const compose = require('./compose')
const prop = require('./prop')

module.exports = curry(
  (p, x) => compose(equals(x), prop(p))
)
