const curry = require('./curry')
const filter = require('./filter')
const composePairs = require('./composePairs')

const out = prop => ([k]) => k !== prop

module.exports = curry(
  (prop, obj) => composePairs (filter (out (prop))) (obj)
)
