const propEq = require('./propEq')

it('should get a prop from an object', () => {
  const object = { a: 1, b: 2, c: { d: 3 } }

  expect(propEq('a', 1, object)).toBe(true)
  expect(propEq('a', 1)(object)).toBe(true)
  expect(propEq('a')(1, object)).toBe(true)
  expect(propEq('a')(1)(object)).toBe(true)
  expect(propEq('a', 3, object)).toBe(false)
  expect(propEq('a', 3)(object)).toBe(false)
  expect(propEq('a')(3, object)).toBe(false)
  expect(propEq('a')(3)(object)).toBe(false)

  expect(propEq('b', 2, object)).toBe(true)
  expect(propEq('b', 2)(object)).toBe(true)
  expect(propEq('b')(2, object)).toBe(true)
  expect(propEq('b')(2)(object)).toBe(true)
  expect(propEq('b', 1, object)).toBe(false)
  expect(propEq('b', 1)(object)).toBe(false)
  expect(propEq('b')(1, object)).toBe(false)
  expect(propEq('b')(1)(object)).toBe(false)

  expect(propEq('c', { d: 3 }, object)).toBe(false)
  expect(propEq('c', { d: 3 })(object)).toBe(false)
  expect(propEq('c')({ d: 3 }, object)).toBe(false)
  expect(propEq('c')({ d: 3 })(object)).toBe(false)
  expect(propEq('c', { d: 2 }, object)).toBe(false)
  expect(propEq('c', { d: 2 })(object)).toBe(false)
  expect(propEq('c')({ d: 2 }, object)).toBe(false)
  expect(propEq('c')({ d: 2 })(object)).toBe(false)
})
