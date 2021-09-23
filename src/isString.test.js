const isString = require('./isString')

it('should check if its parameter is a string, returns a boolean', () => {
  expect(isString('')).toBe(true)
  expect(isString('Some text')).toBe(true)

  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)

  expect(isString(undefined)).toBe(false)

  expect(isString(true)).toBe(false)
  expect(isString(false)).toBe(false)

  expect(isString(1)).toBe(false)
  expect(isString(0)).toBe(false)
})
