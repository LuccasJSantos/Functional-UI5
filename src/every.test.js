const every = require('./every')

it('should evaluate to true when all items in the array meet the predicates criteria', () => {
  const arr = [1, 2, 3, 4, 5]
  const lt = x => y => y < x

  expect(every(lt(6), arr)).toBe(true)
  expect(every(lt(6))(arr)).toBe(true)
})

it('should evaluate to false when at least one item in the array does not meet the predicates criteria', () => {
  const arr = [1, 2, 3, 4, 5]
  const lt = x => y => y < x

  expect(every(lt(5), arr)).not.toBe(true)
  expect(every(lt(5))(arr)).not.toBe(true)
})
