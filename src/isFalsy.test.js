const isFalsy = require('./isFalsy')

it('should check if a parameter is falsy, returns a boolean', () => {
  expect(isFalsy('')).toBe(true)
  expect(isFalsy(0)).toBe(true)
  expect(isFalsy(undefined)).toBe(true)

  expect(isFalsy({})).toBe(false)
  expect(isFalsy([])).toBe(false)
  expect(isFalsy(1)).toBe(false)
  expect(isFalsy('Some text')).toBe(false)
})
