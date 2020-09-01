const curry = require('./curry')
const find = require('./find')

module.exports = curry(
  (conds, args) => {
    const [, cb] = find(([pred]) => pred(args), conds)

    return cb(args)
  }
)
