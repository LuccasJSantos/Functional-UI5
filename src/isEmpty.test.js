const isEmpty = require('./isEmpty')

it('should check if an object is empty, returns a boolean', () => {
  expect(isEmpty({})).toBe(true)
  expect(isEmpty({ name: 'John Smith', age: 23 })).toBe(false)
})

it('should check if an array is empty, returns a boolean', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([1])).toBe(false)
  expect(isEmpty([1, 2, 3])).toBe(false)
})

it('should check if a string is empty, returns a boolean', () => {
  expect(isEmpty('')).toBe(true)
  expect(isEmpty('Some text')).toBe(false)
})
