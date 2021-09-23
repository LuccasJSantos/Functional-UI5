const isObject = require('./isObject')

it('should check if its parameter is an object, returns a boolean', () => {
  expect(isObject({})).toBe(true)

  expect(isObject([])).toBe(false)

  expect(isObject(undefined)).toBe(false)

  expect(isObject(true)).toBe(false)
  expect(isObject(false)).toBe(false)

  expect(isObject(1)).toBe(false)
  expect(isObject(0)).toBe(false)

  expect(isObject('')).toBe(false)
  expect(isObject('Some text')).toBe(false)
})
