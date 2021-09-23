const elif = require('./elif')

const constant = a => () => a
const identity = a => a

it('should resolve for a truthy predicate', () => {
  const T = () => true

  expect(elif(T, identity, constant(2))(1)).toBe(1)
  expect(elif(T, identity)(constant(2))(1)).toBe(1)
  expect(elif(T)(identity, constant(2))(1)).toBe(1)
  expect(elif(T)(identity)(constant(2))(1)).toBe(1)
})

it('should resolve for a falsy predicate', () => {
  const F = () => false

  expect(elif(F, constant(1), identity)(2)).toBe(2)
  expect(elif(F, constant(1))(identity)(2)).toBe(2)
  expect(elif(F)(constant(1), identity)(2)).toBe(2)
  expect(elif(F)(constant(1))(identity)(2)).toBe(2)
})
