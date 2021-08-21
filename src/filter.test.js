const filter = require('./filter')

it('should filter an array which all items are returned', () => {
  const identity = a => a

  expect(filter(identity, [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(filter(identity)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])

  const arr = [{ greet: 'Hello', }, { greet: 'Hello', }]

  expect(filter(identity, arr)).toEqual([{ greet: 'Hello', }, { greet: 'Hello', }])
  expect(filter(identity)(arr)).toEqual([{ greet: 'Hello', }, { greet: 'Hello', }])
})

it('should filter an array which not all items are returned', () => {
  const lt5 = x => x < 5
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(filter(lt5, nums)).toEqual([1, 2, 3, 4])
  expect(filter(lt5)(nums)).toEqual([1, 2, 3, 4])

  const isValid = ({ valid }) => valid
  const arr = [{ valid: false }, { valid: true }, { valid: false }]

  expect(filter(isValid, arr)).toHaveLength(1)
  expect(filter(isValid)(arr)).toHaveLength(1)
})

it('should filter an array which no items are returned', () => {
  const identity = a => a
  const falsyArr = [false, undefined, 0, null]

  expect(filter(identity, falsyArr)).toHaveLength(0)
  expect(filter(identity)(falsyArr)).toHaveLength(0)

  const isValid = ({ valid }) => valid
  const arr = [{ valid: false }, { valid: false }, { valid: false }]

  expect(filter(isValid, arr)).toHaveLength(0)
  expect(filter(isValid)(arr)).toHaveLength(0)
})
