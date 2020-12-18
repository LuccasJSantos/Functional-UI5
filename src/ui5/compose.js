const curry = require('../curry')
const compose = require('../compose')
const getData = require('./getData')

const p = (parent, name, fns) => {
  return compose(...fns)(getData(parent, name))
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
