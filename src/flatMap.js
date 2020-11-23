const isArray = require('./isArray')
const curry = require('./curry')
const flat = require('./flat')

const result = []

const flatMap = curry(
  (fn, arr) => {
    if (arr.length === 0) return arr

    arr.forEach(item => {
      if (!isArray(item)) return result.push(fn(item))

      result.push(...flat(item))
    })

    return result
  }
)

module.exports = flatMap
