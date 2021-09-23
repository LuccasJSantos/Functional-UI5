const path = require('./path')

it('should navigate deeply inside an object based on an array of props', () => {
  const object = { foo: 2, bar: 7, baz: 8, a: { b: { c: { d: { e: 1, f: 5 } } } } }

  expect(path(['foo'], object)).toBe(2)
  expect(path(['foo'])(object)).toBe(2)

  expect(path(['foo', 'bar'], object)).toBe(undefined)
  expect(path(['foo', 'bar'])(object)).toBe(undefined)

  expect(path(['a', 'b', 'c', 'd'], object)).toEqual({ e: 1, f: 5 })
  expect(path(['a', 'b', 'c', 'd'])(object)).toEqual({ e: 1, f: 5 })

  expect(path(['a', 'b', 'c', 'd', 'e'], object)).toBe(1)
  expect(path(['a', 'b', 'c', 'd', 'e'])(object)).toBe(1)

  expect(path(['a', 'b', 'c', 'd', 'f'], object)).toBe(5)
  expect(path(['a', 'b', 'c', 'd', 'f'])(object)).toBe(5)
})
