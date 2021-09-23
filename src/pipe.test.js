const pipe = require('./pipe')

it('should double 4 and add 10, resolving to 18', () => {
  const add10 = x => 10 + x
  const double = x => 2 * x

  expect(pipe(add10, double)(4)).toBe(28)
})
