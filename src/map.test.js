const map = require('./map')

it('should map through an array of elements, given a mapper function', () => {
  const add1 = n => n + 1

  expect(map(add1, [1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 6])
  expect(map(add1)([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 6])

  const addObject = prop => object => object[prop] + 1

  expect(map(addObject('a'), [{ a: 1 }, { a: 2 }, { a: 3 }])).toEqual([2, 3, 4])
  expect(map(addObject('a'))([{ a: 1 }, { a: 2 }, { a: 3 }])).toEqual([2, 3, 4])

  expect(map((_, index, arr) => index + arr.length, [10, 20, 30])).toEqual([3, 4, 5])
  expect(map((_, index, arr) => index + arr.length)([10, 20, 30])).toEqual([3, 4, 5])
})

it('should map through object values, given a mapper function', () => {
  const add1 = n => n + 1
  const toUpper = s => s.toUpperCase()
  const keyToValue = (_, k) => k

  expect(map(add1, { a: 2, b: -1, c: 4 })).toEqual({ a: 3, b: 0, c: 5 })
  expect(map(keyToValue, { a: 2, b: -1, c: 4 })).toEqual({ a: 'a', b: 'b', c: 'c' })
  expect(map(toUpper, { a: 'ab', b: 'cd', c: 'ef' })).toEqual({ a: 'AB', b: 'CD', c: 'EF' })
})
