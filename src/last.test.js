const last = require('./last')

it('should return the last element of an array', () => {
  expect(last([1, 2, 3, 4])).toBe(4)
  expect(last(['1', '2', '3', '4'])).toBe('4')
  expect(last([{ name: 'John' }, { name: 'Smith' }])).toEqual({ name: 'Smith' })
  expect(last([])).toBe(undefined)
})
