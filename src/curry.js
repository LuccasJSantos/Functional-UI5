const isFunction = require('./isFunction')

const CURRIED = 'curried'

const applyCurry = (fn, arg) => {
  if (!isFunction(fn)) return fn

  return fn.length > 1 ? fn.bind(null, arg) : fn(arg)
}

const curry = fn => {
  if (fn[CURRIED]) { return fn } else { fn[CURRIED] = true }

  const curried = (...xs) => {
    const args = xs.length ? xs : [undefined]

    if (args.length < fn.length) {
      return curry(Function.bind.apply(fn, [null].concat(args)))
    }

    const val = args.length === fn.length
      ? fn.apply(null, args)
      : args.reduce(applyCurry, fn)

    if (isFunction(val)) return curry(val)

    return val
  }

  return curried
}

module.exports = curry
