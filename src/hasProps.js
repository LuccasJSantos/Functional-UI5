const length = require('./length')
const compose = require('./compose')
const toPairs = require('./toPairs')
const equals = require('./equals')
const not = require('./not')

module.exports = compose(not(equals(0)), length, toPairs)
