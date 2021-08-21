const and = require('./and')

it('should return true for two predicates that resolves to true', () => {
  const T = () => true

  expect(and(T, T)()).toBe(true)
  expect(and(T)(T)()).toBe(true)
})

it('should return false for one predicate that resolves to false', () => {
  const T = () => true
  const F = () => false

  expect(and(T, F)()).toBe(false)
  expect(and(T)(F)()).toBe(false)

  expect(and(F, T)()).toBe(false)
  expect(and(F)(T)()).toBe(false)

  expect(and(F, F)()).toBe(false)
  expect(and(F)(F)()).toBe(false)
})
