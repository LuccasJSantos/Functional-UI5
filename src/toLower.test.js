const toLower = require('./toLower')

it('should lowercase a string', () => {
  expect(toLower('JOHN')).toBe('john')
  expect(toLower('JOhn')).toBe('john')
  expect(toLower('john')).toBe('john')

  expect(toLower('John90210')).toBe('john90210')
})
