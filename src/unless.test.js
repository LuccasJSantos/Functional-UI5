const unless = require('./unless')

it('should take an argument and pass it through a given predicate, if true it should return the taken argument, otherwise pass the argument through another given mapper function', () => {
  const T = () => true
  const F = () => false
  const add = x => y => x + y

  expect(unless(T, add(1), 10)).toBe(10)
  expect(unless(T, add(1))(10)).toBe(10)
  expect(unless(T)(add(1), 10)).toBe(10)
  expect(unless(T)(add(1))(10)).toBe(10)

  expect(unless(F, add(1), 10)).toBe(11)
  expect(unless(F, add(1))(10)).toBe(11)
  expect(unless(F)(add(1), 10)).toBe(11)
  expect(unless(F)(add(1))(10)).toBe(11)
})
