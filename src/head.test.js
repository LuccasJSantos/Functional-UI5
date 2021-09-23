const head = require('./head')

it('should return the first element of an iterable', () => {
  expect(head([])).toBe(undefined)
  expect(head([1])).toBe(1)
  expect(head([1, 2, 3, 4])).toBe(1)
})
