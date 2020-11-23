const reduce = require('./reduce')
const apply = require('./apply')

module.exports = (...fns) => args => reduce(apply, args, fns)
