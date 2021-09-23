const take = require('./take')

it('should take 0 to N elements from an array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(take(1, array)).toEqual([1])
  expect(take(1)(array)).toEqual([1])

  expect(take(4, array)).toEqual([1, 2, 3, 4])
  expect(take(4)(array)).toEqual([1, 2, 3, 4])

  expect(take(100, array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(take(100)(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  expect(take(0, array)).toEqual([])
  expect(take(0, array)).toEqual([])
})
