const or = require('./or')

it('should return a Boolean for the predicate that resolves to true', () => {
  const I = x => x
  const T = () => true
  const F = () => false

  expect(or(I, F)(0)).toBe(undefined)
  expect(or(I, F)(1)).toBe(1)
  expect(or(I, F)(false)).toBe(undefined)
  expect(or(I, F)(true)).toBe(true)
  expect(or(I, F)({})).toEqual({})
  expect(or(I, F)([])).toEqual([])

  expect(or(F, I)(0)).toBe(undefined)
  expect(or(F, I)(1)).toBe(1)
  expect(or(F, I)(false)).toBe(undefined)
  expect(or(F, I)(true)).toBe(true)
  expect(or(F, I)({})).toEqual({})
  expect(or(F, I)([])).toEqual([])

  expect(or(I, T)(0)).toBe(true)
  expect(or(I, T)(1)).toBe(1)
  expect(or(I, T)(false)).toBe(true)
  expect(or(I, T)(true)).toBe(true)
  expect(or(I, T)({})).toEqual({})
  expect(or(I, T)([])).toEqual([])

  expect(or(T, I)(0)).toBe(true)
  expect(or(T, I)(1)).toBe(true)
  expect(or(T, I)(false)).toBe(true)
  expect(or(T, I)(true)).toBe(true)
  expect(or(T, I)({})).toEqual(true)
  expect(or(T, I)([])).toEqual(true)
})
