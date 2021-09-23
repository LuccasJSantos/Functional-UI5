const apply = require('./apply')

it('should apply 5 to a function that return its param', () => {
  const foo = a => a

  expect(apply(5, foo)).toBe(5)
  expect(apply(5)(foo)).toBe(5)
})
