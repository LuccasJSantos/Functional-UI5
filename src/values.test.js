const values = require('./values')

it('should return the values of an object', () => {
  expect(values({ name: 'John', age: 23, address: { city: 'Fakeland' } }))
    .toEqual(['John', 23, { city: 'Fakeland' }])

  expect(values({})).toEqual([])
})
