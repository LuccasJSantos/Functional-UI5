const prop = require('./prop')

it('should get a prop from an object', () => {
  const object = { a: 1, b: 2, c: { d: 3 } }

  expect(prop('a', object)).toBe(1)
  expect(prop('a')(object)).toBe(1)

  expect(prop('b', object)).toBe(2)
  expect(prop('b')(object)).toBe(2)

  expect(prop('c', object)).toEqual({ d: 3 })
  expect(prop('c', object)).toEqual({ d: 3 })

  expect(prop('d', object)).toBe(undefined)
  expect(prop('d')(object)).toBe(undefined)
})
