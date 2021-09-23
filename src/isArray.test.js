const isArray = require('./isArray')

it('should check if its parameter is an array, returns a boolean', () => {
  expect(isArray(123)).toBe(false)
  expect(isArray('Some string')).toBe(false)

  expect(isArray({})).toBe(false)
  expect(isArray(true)).toBe(false)

  expect(isArray([])).toBe(true)
  expect(isArray([1, 2, 3, 4])).toBe(true)
})
