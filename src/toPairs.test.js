const toPairs = require('./toPairs')

it('should get an object and return an array of pairs', () => {
  const data = { name: 'John Smith', age: 23 }

  expect(toPairs(data)).toEqual([['name', 'John Smith'], ['age', 23]])
})

it('should return an empty object when an empty array is provided', () => {
  expect(toPairs({})).toEqual([])
})
