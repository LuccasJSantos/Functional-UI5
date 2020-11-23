const curry = require('../curry')
const pairWrap = require('../composePairs')
const map = require('../map')

const ui5 = {
  setModel: require('./setModel'),
  getModel: require('./getModel'),
  getData: require('./getData'),
  setData: require('./setData'),
  assignTo: require('./assignTo'),
  pushTo: require('./pushTo')
}

module.exports = curry(
  parent => ({
    ...pairWrap(
      map(([k, fn]) => [k, fn.bind(null, parent)])
    )(ui5),
    for: curry(
      name => pairWrap(
        map(([k, fn]) => [k, fn.bind(null, parent, name)])
      )(ui5))
  }))
