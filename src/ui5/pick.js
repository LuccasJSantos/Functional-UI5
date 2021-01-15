const T = require('../T')
const map = require('../map')
const cond = require('../cond')
const pick = require('../pick')
const curry = require('../curry')
const undef = require('../undef')
const isArray = require('../isArray')
const isObject = require('../isObject')

const getData = require('./getData')

module.exports = curry(
  (parent, name, props) => {
    const data = getData(parent, name)
    const getProps = pick (props)
    const getPropsFromArray = map (getProps)

    const mapping = [
      [isObject, getProps],
      [isArray, getPropsFromArray],
      [T, undef]
    ]

    return cond(mapping) (data)
  }
)
