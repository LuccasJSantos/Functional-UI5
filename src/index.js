const lib = {
  add: require('./add'),
  and: require('./and'),
  append: require('./append'),
  apply: require('./apply'),
  assoc: require('./assoc'),
  bind: require('./bind'),
  call: require('./call'),
  compose: require('./compose'),
  composePairs: require('./composePairs'),
  cond: require('./cond'),
  constant: require('./constant'),
  curry: require('./curry'),
  dissoc: require('./dissoc'),
  divide: require('./divide'),
  elif: require('./elif'),
  equals: require('./equals'),
  every: require('./every'),
  evolve: require('./evolve'),
  F: require('./F'),
  filter: require('./filter'),
  find: require('./find'),
  flat: require('./flat'),
  flatMap: require('./flatMap'),
  flip: require('./flip'),
  forEach: require('./forEach'),
  fromPairs: require('./fromPairs'),
  head: require('./head'),
  identity: require('./identity'),
  isArray: require('./isArray'),
  isEmpty: require('./isEmpty'),
  isFalsy: require('./isFalsy'),
  isFunction: require('./isFunction'),
  isNil: require('./isNil'),
  isObject: require('./isObject'),
  isString: require('./isString'),
  isTruthy: require('./isTruthy'),
  isUndef: require('./isUndef'),
  keys: require('./keys'),
  last: require('./last'),
  length: require('./length'),
  log: require('./log'),
  map: require('./map'),
  memoize: require('./memoize'),
  multiply: require('./multiply'),
  nil: require('./nil'),
  not: require('./not'),
  omit: require('./omit'),
  or: require('./or'),
  path: require('./path'),
  pick: require('./pick'),
  pipe: require('./pipe'),
  prepend: require('./prepend'),
  prop: require('./prop'),
  propEq: require('./propEq'),
  reduce: require('./reduce'),
  reduceRight: require('./reduceRight'),
  subtract: require('./subtract'),
  T: require('./T'),
  take: require('./take'),
  toLower: require('./toLower'),
  toPairs: require('./toPairs'),
  toUpper: require('./toUpper'),
  undef: require('./undef'),
  unless: require('./unless'),
  when: require('./when'),
  model: require('./ui5/model')
}

if (globalThis.sap) {
  sap.ui.define([], () => lib)
} else {
  globalThis.L = lib
}
