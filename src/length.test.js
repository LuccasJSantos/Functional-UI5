const length = require('./length')

it('should return the length of an array', () => {
  expect(length([1, 2, 3])).toBe(3)
  expect(length([])).toBe(0)
})

it('should return the length of a string', () => {
  expect(length('Hello, World')).toBe(12)
  expect(length('')).toBe(0)
})
