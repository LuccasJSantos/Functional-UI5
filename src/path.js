const prop = require('./prop')
const reduce = require('./reduce')
const flip = require('./flip')

module.exports = flip(
  reduce(flip(prop))
)
