function makeFive() {
  return 4
}


test('sanity', () => {
  expect(true).toBe(true)
})

describe('intro to testing', () => {
  test('sanity again', () => {
    expect(true).not.toBe(false)
  })
  test('structure of a test', () => {
    const expected = 5
    const actual = makeFive()
  })
})
