const clone = require('./clone')

it('should clone simple object', () => {
  const inputObject = { name: 'Luccas', age: 23 }
  const expectedObject = { name: 'Luccas', age: 23 }

  expect(clone(inputObject)).toEqual(expectedObject)
})

it('should clone a deep object', () => {
  const inputObject = { name: 'Luccas', a: { b: { c: 'Hello' } } }
  const expectedObject = { name: 'Luccas', a: { b: { c: 'Hello' } } }

  expect(clone(inputObject)).toEqual(expectedObject)
})

it('should clone an array', () => {
  expect(clone([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

it('should clone an array of objects', () => {
  const inputArray = [{ name: 'a', }, { name: 'b' }]
  const expectedArray = [{ name: 'a', }, { name: 'b' }]

  expect(clone(inputArray)).toEqual(expectedArray)
})

it('should return the argument if it is neither an object nor an array', () => {
  expect(clone(1)).toBe(1)
  expect(clone('Some Argument')).toBe('Some Argument')
})
