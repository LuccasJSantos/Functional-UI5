const reduce = require('./reduce')
const assoc = require('./assoc')

module.exports = reduce(
  (acc, [key, value]) => assoc(key, value, acc), {}
)
