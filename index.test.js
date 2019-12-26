// Modules loaded for testing.
const sortaa = require('./index.js')

// test
const nonArrayofArrays = [1, 2, 3]

// Numerica Array to test.
const numericTest = [
  [6, 2, 12],
  [4, 10, 6],
  [7, 8, 1]
]

const stringTest = [
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['a', 'z', 'c']
]

const stringTestCase = [
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['A', 'Z', 'c']
]

test('Testing sorting Non Array of Arrays', () => {
  expect(sortaa(nonArrayofArrays)).toBe(nonArrayofArrays)
})

test('Testing invalid index', () => {
  expect(sortaa(numericTest, 'a')).toBe(numericTest)
})

test('Testing invalid configuration', () => {
  expect(sortaa(numericTest, 0, 'a')).toBe(numericTest)
})

test('Testing ascending sorting of Numeric test default idx', () => {
  const sortResults = sortaa(numericTest)
  expect(sortResults[0][0]).toBe(4)
  expect(sortResults[1][2]).toBe(12)
  expect(sortResults[2][1]).toBe(8)
})

test('Testing ascending sorting of Numeric test specific idx', () => {
  const sortResults = sortaa(numericTest, 2)
  expect(sortResults[0][0]).toBe(7)
  expect(sortResults[1][2]).toBe(6)
  expect(sortResults[2][1]).toBe(2)
})

test('Testing ascending sorting of Numeric test specific idx "desc" order', () => {
  const sortResults = sortaa(numericTest, 2, { order: 'desc' })
  expect(sortResults[2][0]).toBe(7)
  expect(sortResults[1][2]).toBe(6)
  expect(sortResults[0][1]).toBe(2)
})

test('Testing ascending sorting of String test specific idx', () => {
  const sortResults = sortaa(stringTest, 0)
  expect(sortResults[0][0]).toBe('a')
  expect(sortResults[1][2]).toBe('f')
  expect(sortResults[2][1]).toBe('h')
})

test('Testing ascending sorting of String test specific idx. "caseInsensitive', () => {
  const sortResults = sortaa(stringTestCase, 0, { caseInsensitive: true })
  expect(sortResults[0][0]).toBe('A')
  expect(sortResults[1][2]).toBe('f')
  expect(sortResults[2][1]).toBe('h')
})
