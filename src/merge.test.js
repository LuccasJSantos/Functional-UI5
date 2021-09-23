const merge = require('./merge')

it('should merge objects', () => {
  expect(merge({ name: 'John' }, { age: 23 })).toEqual({ name: 'John', age: 23 })
  expect(merge({ name: 'John' })({ age: 23 })).toEqual({ name: 'John', age: 23 })

  expect(merge({ a: 1, b: 2 }, { c: 3 }, { d: 4 }, { e: { f: 5 } }))
    .toEqual({ a: 1, b: 2, c: 3, d: 4, e: { f: 5 } })

  expect(merge({ a: 1 })({ b: 2, c: 3 }, { d: 4 }))
    .toEqual({ a: 1, b: 2, c: 3, d: 4 })

  expect(merge()).toEqual({})
})
