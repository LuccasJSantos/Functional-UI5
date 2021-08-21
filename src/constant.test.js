const constant = require('./constant')

it('should constant some value', () => {
  expect(constant(1)(2)).toBe(1)
  expect(constant(2)(1)).toBe(2)
  expect(constant(3)(3)).toBe(3)
})
