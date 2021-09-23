const toUpper = require('./toUpper')

it('should lowercase a string', () => {
  expect(toUpper('JOHN')).toBe('JOHN')
  expect(toUpper('JOhn')).toBe('JOHN')
  expect(toUpper('john')).toBe('JOHN')

  expect(toUpper('John90210')).toBe('JOHN90210')
})
