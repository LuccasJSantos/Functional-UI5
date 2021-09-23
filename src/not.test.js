const not = require('./not')

it('should negate a functions result', () => {
  const T = () => true
  const F = () => false

  expect(not(T)()).toBe(false)
  expect(not(T)(true)).toBe(false)
  expect(not(T)(false)).toBe(false)

  expect(not(F)()).toBe(true)
  expect(not(F)()).toBe(true)
  expect(not(F)()).toBe(true)
})
