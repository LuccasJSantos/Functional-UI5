const curry = require('./curry')

module.exports = curry(
  (pred1, pred2, args) => pred1(args) && pred2(args))
