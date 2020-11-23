const isArray = require('./isArray')

const result = []

const flat = arr => {
  if (arr.length === 0) return arr

  arr.forEach(item => isArray(item) ? flat(item) : result.push(item))

  return result
}

module.exports = flat
