const undef = require('./undef')

it('should return undefined when invoked', () => {
  expect(undef()).toBe(undefined)
  expect(undef(true)).toBe(undefined)
  expect(undef(false)).toBe(undefined)
})
