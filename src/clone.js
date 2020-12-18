const identity = require('./identity')
const cond = require('./cond')
const isObject = require('./isObject')
const isArray = require('./isArray')
const T = require('./T')
const merge = require('./merge')

module.exports = cond ([
  [isObject, merge ({})],
  [isArray, v => [].concat(v)],
  [T, identity]
])
