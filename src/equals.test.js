const equals = require('./equals')

it('should evaluate equality of primitive values (T)', () => {
  expect(equals(1, 1)).toBe(true)
  expect(equals(1)(1)).toBe(true)

  expect(equals(1.1, 1.1)).toBe(true)
  expect(equals(1.1)(1.1)).toBe(true)

  expect(equals('hello', 'hello')).toBe(true)
  expect(equals('hello')('hello')).toBe(true)
})

it('should evaluate equality of primitive values (F)', () => {
  expect(equals(1, 2)).not.toBe(true)
  expect(equals(1)(2)).not.toBe(true)

  expect(equals(1.1, 2.2)).not.toBe(true)
  expect(equals(1.1)(2.2)).not.toBe(true)

  expect(equals('hello', 'hi')).not.toBe(true)
  expect(equals('hello')('hi')).not.toBe(true)
})

it('should evaluate equality of objects (F)', () => {
  expect(equals({ a: 'Hello', }, { a: 'Hello', })).not.toBe(true)
  expect(equals({ a: 'Hello', })({ a: 'Hello', })).not.toBe(true)

  expect(equals([1, 2, 3], [1, 2, 3])).not.toBe(true)
  expect(equals([1, 2, 3])([1, 2, 3])).not.toBe(true)
})
