const multiply = require('./multiply')

it('should multiply 2 and 5.2 and it should be equals to 10.4', () => {
  expect(multiply(2, 5.2)).toBe(10.4)
  expect(multiply(2)(5.2)).toBe(10.4)
  expect(multiply(5.2, 2)).toBe(10.4)
  expect(multiply(5.2)(2)).toBe(10.4)
})
