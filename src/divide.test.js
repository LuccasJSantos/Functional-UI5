const divide = require('./divide')

it('should divide two numbers, the left one is the dividend, the right one is the divisor', () => {
  expect(divide(6, 3)).toBe(2)
  expect(divide(6)(3)).toBe(2)

  expect(divide(3, 6)).toBe(0.5)
  expect(divide(3)(6)).toBe(0.5)
})
