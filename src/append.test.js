const append = require('./append')

it('should append 2 to [1, 2, 3], resolving to [1, 2, 3, 2]', () => {
  expect(append(2, [1, 2, 3])).toEqual([1, 2, 3, 2])
  expect(append(2)([1, 2, 3])).toEqual([1, 2, 3, 2])
})
