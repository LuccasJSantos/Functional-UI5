const nil = require('./nil')

it('should return null', () => {
  expect(nil()).toBe(null)
  expect(nil(true)).toBe(null)
  expect(nil(false)).toBe(null)
})
