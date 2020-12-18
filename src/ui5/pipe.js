const curry = require('../curry')
const pipe = require('../pipe')
const getData = require('./getData')

const p = (parent, name, fns) => {
  return pipe(...fns)(getData(parent, name))
}

module.exports = (parent, name, ...fns) => {
  if (parent && name && fns.length > 0) {
    return p(parent, name, fns)
  }

  if (parent && name) {
    return curry((...fns) => p(parent, name, fns))
  }

  if (parent) {
    return (name, ...fns) => {
      if (name && fns.length > 0) {
        return p(parent, name, fns)
      }

      if (name) {
        return curry((...fns) => p(parent, name, fns))
      }
    }
  }
}
