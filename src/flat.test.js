const flat = require('./flat')

it('should flat an array', () => {
  expect(flat([])).toEqual([])
  expect(flat([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(flat([1, 2, [3, 4, [5, 6]], 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
})
