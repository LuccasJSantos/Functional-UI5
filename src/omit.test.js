const omit = require('./omit')

it('should omit n props of an object', () => {
  expect(omit(['a'], { a: 1, b: 2 })).toEqual({ b: 2 })
  expect(omit(['a'])({ a: 1, b: 2 })).toEqual({ b: 2 })

  expect(omit(['a', 'b'], { a: 1, b: 2 })).toEqual({})
  expect(omit(['a', 'b'])({ a: 1, b: 2 })).toEqual({})

  expect(omit(['c'], { a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2 })
  expect(omit(['c'])({ a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2 })

  expect(omit(['d'], { a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2, c: { d: 1 } })
  expect(omit(['d'])({ a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2, c: { d: 1 } })

  expect(omit([], { a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2, c: { d: 1 } })
  expect(omit([])({ a: 1, b: 2, c: { d: 1 } })).toEqual({ a: 1, b: 2, c: { d: 1 } })
})
