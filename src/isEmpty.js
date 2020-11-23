const cond = require('./cond')
const isObject = require('./isObject')
const isArray = require('./isArray')
const isString = require('./isString')
const compose = require('./compose')
const equals = require('./equals')
const length = require('./length')
const keys = require('./keys')
const or = require('./or')

const isLengthZero = compose(equals(0), length)

module.exports = cond([
  [isObject, compose(isLengthZero, keys)],
  [or(isArray, isString), isLengthZero]
])
