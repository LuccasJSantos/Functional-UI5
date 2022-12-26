const curry = require('./curry')
const filter = require('./filter')

const out = prop => (_, k) => k !== prop

module.exports = curry(
  (prop, obj) => filter (out (prop)) (obj)
)
