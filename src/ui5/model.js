const curry = require('../curry')
const pairWrap = require('../composePairs')
const map = require('../map')
const dissoc = require('../dissoc')
const getModel = require('./getModel')
const setModel = require('./setModel')

const ui5 = {
  setModel: require('./setModel'),
  getModel: require('./getModel'),
  getModelPromise: require('./getModelPromise'),
  getData: require('./getData'),
  setData: require('./setData'),
  assignTo: require('./assignTo'),
  pushTo: require('./pushTo'),
  map: require('./map'),
  filter: require('./filter'),
  reduce: require('./reduce'),
  compose: require('./compose'),
  pipe: require('./pipe'),
  prop: require('./prop'),
  pick: require('./pick'),
  applyTo: require('./applyTo'),
}

module.exports = curry(parent => ({
  ...map((fn, k) => [k, fn(parent)])(ui5),
  for: (name, value = undefined) => {
    const model = getModel(parent, name)
    if (!model) {
      setModel(parent, name, value)
    }

    const filteredOutFns = dissoc('getModelPromise')(ui5)

    return map((fn) => fn.bind(null, parent, name))
              (filteredOutFns)
  },
}))
