const reduceRight = require('./reduceRight')

it('should reduce through an array', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const reducer = (acc, item) => [...acc, item + 1]

  expect(reduceRight(reducer, [], array)).toEqual([11, 10, 9, 8, 7, 6, 5, 4, 3, 2])
  expect(reduceRight(reducer, [])(array)).toEqual([11, 10, 9, 8, 7, 6, 5, 4, 3, 2])
  expect(reduceRight(reducer)([], array)).toEqual([11, 10, 9, 8, 7, 6, 5, 4, 3, 2])
})
