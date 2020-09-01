const curry = require('./curry')
const reduce = require('./reduce')
const dissoc = require('./dissoc')
const flip = require('./flip')

module.exports = curry(
  (props, obj) => reduce(flip(dissoc), obj, props)
)
