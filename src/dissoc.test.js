const dissoc = require('./dissoc')

it('should associate the prop "id" with value "10A" to the object { name: "Luccas", age: 23 }', () => {
  const inputObject = { id: '10A', name: 'Luccas', age: 23 }
  const expectedObject = { name: 'Luccas', age: 23 }

  expect(dissoc('id', inputObject)).toEqual(expectedObject)
  expect(dissoc('id')(inputObject)).toEqual(expectedObject)
  expect(dissoc('id')(inputObject)).toEqual(expectedObject)
  expect(dissoc('id')(inputObject)).toEqual(expectedObject)
})
