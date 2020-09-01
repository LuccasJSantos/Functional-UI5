const apply = require('./apply')
const reduceRight = require('./reduceRight')

module.exports = (...fns) => args => reduceRight(apply, args, fns)
