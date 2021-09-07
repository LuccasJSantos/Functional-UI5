const identity = require('./identity')

it('should return the same parameter when invoked', () => {
  expect(identity(2)).toBe(2)
  expect(identity('2')).toBe('2')

  expect(identity([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(identity({ name: 'John Smith', age: 23 })).toEqual({ name: 'John Smith', age: 23 })
})
