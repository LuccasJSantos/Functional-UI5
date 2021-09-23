const pick = require('./pick')

it('should pick N props from an object', () => {
  const object = { a: 1, b: 2, c: { d: 3 } }

  expect(pick(['a', 'b'], object)).toEqual({ a: 1, b: 2 })
  expect(pick(['a', 'b'])(object)).toEqual({ a: 1, b: 2 })

  expect(pick(['a', 'b', 'c'], object)).toEqual({ a: 1, b: 2, c: { d: 3 } })
  expect(pick(['a', 'b', 'c'])(object)).toEqual({ a: 1, b: 2, c: { d: 3 } })

  expect(pick([], object)).toEqual({})
  expect(pick([])(object)).toEqual({})
})
