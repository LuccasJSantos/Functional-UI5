const curry = require('./curry')

it('should curry a function properly', () => {
  const add = curry((a, b, c) => a + b + c)

  expect(add(1, 2, 3)).toBe(6)
  expect(add(1, 2)(3)).toBe(6)
  expect(add(1)(2, 3)).toBe(6)
  expect(add(1)(2)(3)).toBe(6)
})

it('should curry a function properly 2', () => {
  const add = curry((a, b) => c => a + b + c)

  expect(add(1, 2, 3)).toBe(6)
  expect(add(1, 2)(3)).toBe(6)
  expect(add(1)(2, 3)).toBe(6)
  expect(add(1)(2)(3)).toBe(6)
})
