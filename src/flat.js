const isArray = require('./isArray')
const clone = require('./clone')

const flat = arr => {
  if (arr.length === 0) return clone(arr)

  return arr.reduce((acc, item) => {
    if (isArray(item)) {
      return acc.concat(flat(item))
    }

    return acc.concat(item)
  }, [])
}

module.exports = flat
