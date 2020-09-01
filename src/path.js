const curry = require('./curry')
const cond = require('./cond')
const compose = require('./compose')
const prop = require('./prop')
const isObject = require('./isObject')
const identity = require('./identity')
const T = require('./T')
const isArray = require('./isArray')
const map = require('./map')
const flat = require('./flat')
const isUndef = require('./isUndef')
const undef = require('./undef')
const bind = require('./bind')
const when = require('./when')

const path = curry(
  ([p, ...ps], args) => cond([
    [bind(p, isUndef), identity],
    [isObject, compose(path(ps), prop(p))],
    [isArray, map(path([p, ...ps]))],
    [T, undef]
  ], args)
)

module.exports = curry(
  props => compose(
    when(isArray, flat),
    path(props))
)
