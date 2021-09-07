const isTruthy = require('./isTruthy')

it('should check if a parameter is truthy, returns a boolean', () => {
  expect(isTruthy({})).toBe(true)
  expect(isTruthy([])).toBe(true)
  expect(isTruthy(1)).toBe(true)
  expect(isTruthy('Some text')).toBe(true)

  expect(isTruthy('')).toBe(false)
  expect(isTruthy(0)).toBe(false)
  expect(isTruthy(undefined)).toBe(false)
})
