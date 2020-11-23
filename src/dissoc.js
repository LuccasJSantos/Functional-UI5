const keys = require('./keys')
const curry = require('./curry')
const assoc = require('./assoc')
const reduce = require('./reduce')
const elif = require('./elif')
const equals = require('./equals')
const constant = require('./constant')
const compose = require('./compose')

module.exports = curry(
  (prop, obj) => compose(
    reduce((acc, key) =>
      elif(
        equals(prop), constant(acc), assoc(key, obj[key], acc), key),
    {}
    ),
    keys
  )(obj)
)
