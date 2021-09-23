const flatMap = require('./flatMap')

it('should map through an array and flat it at the same time', () => {
  const arr = [1, 2, [3, 4, [5, 6]], 7]
  const inc = x => 1 + x

  expect(flatMap(inc, arr)).toEqual([2, 3, 4, 5, 6, 7, 8])
  expect(flatMap(inc)(arr)).toEqual([2, 3, 4, 5, 6, 7, 8])
})
