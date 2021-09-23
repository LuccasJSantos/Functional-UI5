const when = require('./when')

it('should take an argument and pass it through a given predicate, if true it should pass the argument through another given mapper function, otherwise return the taken argument', () => {
  const T = () => true
  const F = () => false
  const add = x => y => x + y

  expect(when(T, add(1), 10)).toBe(11)
  expect(when(T, add(1))(10)).toBe(11)
  expect(when(T)(add(1), 10)).toBe(11)
  expect(when(T)(add(1))(10)).toBe(11)

  expect(when(F, add(1), 10)).toBe(10)
  expect(when(F, add(1))(10)).toBe(10)
  expect(when(F)(add(1), 10)).toBe(10)
  expect(when(F)(add(1))(10)).toBe(10)
})
