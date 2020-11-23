const compose = require('./compose')
const toPairs = require('./toPairs')
const fromPairs = require('./fromPairs')

module.exports = (...fns) => compose(
  fromPairs,
  ...fns,
  toPairs
)
