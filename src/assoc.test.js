const assoc = require('./assoc')

it('should associate the prop "id" with value "10A" to the object { name: "Luccas", age: 23 }', () => {
  const inputObject = { name: 'Luccas', age: 23 }
  const expectedObject = { id: '10A', name: 'Luccas', age: 23 }

  expect(assoc('id', '10A', inputObject)).toEqual(expectedObject)
  expect(assoc('id', '10A')(inputObject)).toEqual(expectedObject)
  expect(assoc('id')('10A', inputObject)).toEqual(expectedObject)
  expect(assoc('id')('10A')(inputObject)).toEqual(expectedObject)
})
