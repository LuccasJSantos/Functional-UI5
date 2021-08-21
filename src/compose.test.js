const compose = require('./compose')

it('should double 4 and add 10, resolving to 18', () => {
  const add10 = x => 10 + x
  const double = x => 2 * x

  expect(compose(add10, double)(4)).toBe(18)
})
