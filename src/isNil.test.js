const isNil = require('./isNil')

it('should check if the parameter is null', () => {
  expect(isNil(null)).toBe(true)

  expect(isNil(undefined)).toBe(false)

  expect(isNil(true)).toBe(false)
  expect(isNil(false)).toBe(false)

  expect(isNil(1)).toBe(false)
  expect(isNil(0)).toBe(false)

  expect(isNil('')).toBe(false)
  expect(isNil('Some text')).toBe(false)

  expect(isNil({})).toBe(false)
  expect(isNil([])).toBe(false)
})
