const fromPairs = require('./fromPairs')

it('should get an array of pairs and return an object', () => {
  const data = [['name', 'John Smith'], ['age', 23]]

  expect(fromPairs(data)).toEqual({ name: 'John Smith', age: 23 })
})

it('should return an empty object when an empty array is provided', () => {
  expect(fromPairs([])).toEqual({})
})
