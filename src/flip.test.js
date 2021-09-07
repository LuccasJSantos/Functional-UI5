const flip = require('./flip')

it('should flip the first 2 arguments of a binary function', () => {
  const subtract = (x, y) => x - y

  expect(flip(subtract)(5, 1)).toBe(-4)
  expect(flip(subtract)(5)(1)).toBe(-4)
})

it('should flip the first 2 arguments of a ternary+ function', () => {
  const subtract = (x, y, z) => x - y - z

  expect(flip(subtract)(1, 2, 3)).toBe(-2)
})
