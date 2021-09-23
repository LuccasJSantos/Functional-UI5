const curry = require('./curry')

module.exports = curry((f, g, args) => f(args) || g(args) || undefined)
