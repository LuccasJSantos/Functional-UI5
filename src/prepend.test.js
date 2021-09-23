const prepend = require('./prepend')

it('should prepend 2 to [1, 2, 3], resolving to [2, 1, 2, 3]', () => {
  expect(prepend(2, [1, 2, 3])).toEqual([2, 1, 2, 3])
  expect(prepend(2)([1, 2, 3])).toEqual([2, 1, 2, 3])
})
