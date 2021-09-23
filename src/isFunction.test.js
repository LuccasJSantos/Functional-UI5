const isFunction = require('./isFunction')

it('should check if its parameter is a function, returns a boolean', () => {
  const fn1 = () => { }
  const fn2 = function () { }
  function fn3 () { }
  const bar = { fn: () => {} }

  expect(isFunction(fn1)).toBe(true)
  expect(isFunction(fn2)).toBe(true)
  expect(isFunction(fn3)).toBe(true)
  expect(isFunction(bar.fn)).toBe(true)

  expect(isFunction(undefined)).toBe(false)

  expect(isFunction(true)).toBe(false)
  expect(isFunction(false)).toBe(false)

  expect(isFunction(1)).toBe(false)
  expect(isFunction(0)).toBe(false)

  expect(isFunction('')).toBe(false)
  expect(isFunction('Some text')).toBe(false)

  expect(isFunction({})).toBe(false)
  expect(isFunction([])).toBe(false)
})
