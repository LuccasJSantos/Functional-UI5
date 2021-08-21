const cond = require('./cond')

const T = () => true
const F = () => false
const constant = a => () => a
const identity = a => a

it('should resolve the truthy predicate', () => {
  expect(cond([
    [T, identity],
    [T, constant(2)],
    [T, constant(3)],
  ])(1)).toBe(1)

  expect(cond([
    [F, constant(1)],
    [T, identity],
    [T, constant(3)],
  ])(2)).toBe(2)

  expect(cond([
    [F, constant(1)],
    [F, constant(2)],
    [T, identity],
  ])(3)).toBe(3)
})
