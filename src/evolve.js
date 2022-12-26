const curry = require('./curry')
const map = require('./map')
const isObject = require('./isObject')
const cond = require('./cond')
const isFunction = require('./isFunction')
const T = require('./T')
const flip = require('./flip')
const apply = require('./apply')
const constant = require('./constant')

const evolve = curry(
  fnMap => map(
    (value, key) => cond([
      [isFunction, apply(value)],
      [isObject, flip(evolve)(value)],
      [T, constant(value)]
    ], fnMap[key])
  )
)

module.exports = evolve
