const map = require('../src/map')
const filter = require('../src/filter')
const reduce = require('../src/reduce')

module.exports = () => {
  Promise.prototype.map = function (fn) {
    return this.then(map(fn))
  }

  Promise.prototype.filter = function (fn) {
    return this.then(filter(fn))
  }

  Promise.prototype.reduce = function (fn, init) {
    return this.then(reduce(fn, init))
  }
}
