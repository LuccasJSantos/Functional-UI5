const T = require('../T')
const map = require('../map')
const cond = require('../cond')
const prop = require('../prop')
const curry = require('../curry')
const undef = require('../undef')
const isArray = require('../isArray')
const isObject = require('../isObject')

const getData = require('./getData')

module.exports = curry(
  (parent, name, p) => {
    const data = getData(parent, name)
    const getProp = prop (p)
    const getPropFromArray = map (getProp)

    const mapping = [
      [isObject, getProp],
      [isArray, getPropFromArray],
      [T, undef]
    ]

    return cond(mapping) (data)
  })
