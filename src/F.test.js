const F = require('./F')

it('should return false when invoked', () => {
  expect(F()).toBe(false)
  expect(F(true)).toBe(false)
  expect(F(false)).toBe(false)
})
