const subtract = require('./subtract')

it('should add 1 + 5 and it should be equals to 6', () => {
  expect(subtract(1, 5)).toBe(-4)
  expect(subtract(1)(5)).toBe(-4)
  expect(subtract(5, 1)).toBe(4)
  expect(subtract(5)(1)).toBe(4)
})
