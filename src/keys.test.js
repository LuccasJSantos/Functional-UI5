const keys = require('./keys')

it('should return the keys from an object', () => {
  expect(keys({ name: 'John', age: 23, address: { city: 'Fakeland' } }))
    .toEqual(['name', 'age', 'address'])

  expect(keys({})).toEqual([])
})
