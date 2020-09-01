const curry = require('./curry')
const reduce = require('./reduce')
const assoc = require('./assoc')

module.exports = curry(
  (props, obj) => reduce((acc, prop) => assoc(prop, obj[prop], acc), {}, props)
)
