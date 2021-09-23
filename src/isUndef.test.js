const isUndef = require('./isUndef')

it('should check if its parameter is an object, returns a boolean', () => {
  expect(isUndef(undefined)).toBe(true)

  expect(isUndef('')).toBe(false)
  expect(isUndef('Some text')).toBe(false)

  expect(isUndef({})).toBe(false)
  expect(isUndef([])).toBe(false)

  expect(isUndef(true)).toBe(false)
  expect(isUndef(false)).toBe(false)

  expect(isUndef(1)).toBe(false)
  expect(isUndef(0)).toBe(false)
})
