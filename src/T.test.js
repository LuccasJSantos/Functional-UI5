const T = require('./T')

it('should return true when invoked', () => {
  expect(T()).toBe(true)
  expect(T(true)).toBe(true)
  expect(T(false)).toBe(true)
})
