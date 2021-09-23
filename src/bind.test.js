const bind = require('./bind')

it('should bind 5 to a function that returns its param', () => {
  const foo = a => a

  expect(bind(5, foo)()).toEqual(5)
  expect(bind(5)(foo)()).toEqual(5)
})

it('should bind 5 to a function that expects 2 params, which returns the bound param plus 6, that equals 11', () => {
  const foo = (x, y) => x + y

  expect(bind(5, foo, 6)).toEqual(11)
  expect(bind(5, foo)(6)).toEqual(11)
  expect(bind(5)(foo)(6)).toEqual(11)
})
