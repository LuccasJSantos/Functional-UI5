const evolve = require('./evolve')

const toUpper = str => str.toUpperCase()
const inc = x => 1 + x

it('should transform the object properly', () => {
  const transform = { name: toUpper, age: inc }
  const inputObject = { id: '10A', name: 'Luccas', age: 22 }
  const expectedObject = { id: '10A', name: 'LUCCAS', age: 23 }

  expect(evolve(transform, inputObject)).toEqual(expectedObject)
  expect(evolve(transform)(inputObject)).toEqual(expectedObject)
})

it('should transform a deep object properly', () => {
  const transform = { name: toUpper, a: { b: { c: inc } } }
  const inputObject = { id: '10A', name: 'Luccas', a: { b: { c: 5 } } }
  const expectedObject = { id: '10A', name: 'LUCCAS', a: { b: { c: 6 } } }

  expect(evolve(transform, inputObject)).toEqual(expectedObject)
  expect(evolve(transform)(inputObject)).toEqual(expectedObject)
})
