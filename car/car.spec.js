const { makeFive, makeFour, makeObj, Car } = require('./car')

describe('intro to testing', () => {
  test('sanity again', () => {
    expect(true).not.toBe(false)
  })
  test('structure of a test', () => {
    const expected = 5
    const actual = makeFive()
    expect(actual).toBe(expected)
  })
  test('async function', async () => {
    const expected = 4
    const actual = await makeFour()
    expect(actual).toBe(expected)
  })
})

describe('comparing values', () => { // do not use async on the describe
  it('works with objects', () => {
    expect('foo').toBe('foo') // use toBe with 'scalar' values like strings etc
    expect({}).not.toBe({})
    expect([]).not.toBe([])

    const o = {}
    const o2 = o
    expect(o).toBe(o2)
  })
  test('shapes of composite values', () => {
    expect({}).toEqual({})
    expect([]).toEqual([])
    expect(makeObj()).toEqual({})

    const o = { name: 'lady gaga', password: '1234' }
    expect(o.name).toBe('lady gaga')
    // expect(o).toEqual({ name: 'lady gaga' }) NOT VERY RESILIENT
    expect(o).toMatchObject({ name: 'lady gaga' })
  })
})

describe('Car class', () => {
  it('exists', () => {
    // 0- start with tests in the green
    // 1- write simplest possible failing test
    // 2- write simplest code that will pass test
    expect(Car).toBeDefined()
  })
})
