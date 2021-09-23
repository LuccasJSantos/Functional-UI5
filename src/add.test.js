const add = require('./add')

it('should add 1 + 5 and it should be equals to 6', () => {
  expect(add(1, 5)).toBe(6)
  expect(add(1)(5)).toBe(6)
  expect(add(5, 1)).toBe(6)
  expect(add(5)(1)).toBe(6)
})
