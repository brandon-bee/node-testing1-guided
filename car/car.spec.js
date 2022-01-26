// Test away!
test('sanity', () => {
  expect(true).toBe(true)
})

describe('intro to testing', () => {
  test('sanity again', () => {
    expect(true).not.toBe(false)
  })
})
