const reduce = require('./reduce')

it('should reduce through an array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const reducer = (acc, item) => [...acc, item + 1]

  expect(reduce(reducer, [], array)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  expect(reduce(reducer, [])(array)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  expect(reduce(reducer)([], array)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
})
