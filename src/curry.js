const CURRIED = 'curried'

const curry = fn => {
  if (fn[CURRIED]) { return fn } else { fn[CURRIED] = true }

  return (...args) => args.length < fn.length
    ? Function.bind.apply(fn, [null].concat(args))
    : fn(...args)
}

module.exports = curry
