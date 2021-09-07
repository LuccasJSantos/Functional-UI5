const find = require('./find')

it('should find an item in the array', () => {
  const equals = x => y => x === y
  const arr = [1, 2, 3, 4, 5]

  expect(find(equals(1), arr)).toBe(1)
  expect(find(equals(1))(arr)).toBe(1)
})
