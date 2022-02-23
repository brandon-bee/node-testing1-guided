// Test away!
const { badCar, Car } = require('./car')

test('that it works', () => {
  expect(true).toBe(true)
})

describe('badCar', () => {
  it('returns a toyota', () => {
    const actualValue = badCar()
    const actualValue2 = actualValue
    const expectedValue = {
      make: 'Toyota',
      model: 'Prius'
    }

    expect(actualValue).toEqual(expectedValue)
    expect(actualValue).toBe(actualValue2)
  })
})

describe('car class', () => {
  let car
  beforeEach(() => {
    car = new Car('Toyota', 'Prius')
  })

  it('exists', () => {
    expect(Car).toBeDefined()
  })
  it('can build instance of cars', () => {
    const car = new Car()
    expect(car).toBeInstanceOf(Car)
  })
  it('can build a car with make and model', () => {
    expect(car).toHaveProperty('make')
    expect(car).toHaveProperty('model')

    expect(car.make).toBe('Toyota')
    expect(car.model).toBe('Prius')

    expect(car).toMatchObject({
      model: 'Prius',make: 'Toyota'
    })
  })
  it('new cars have an odometer prop initialized at zero', () => {
    expect(car.odometer).toBe(0)
  })
  it('cars have a drive method', () => {
    expect(car.drive).toBe(Car.prototype.drive)
  })
  it('driving the car adds miles to the odometer', () => {
    car.drive(10)
    expect(car.odometer).toBe(10)
    car.drive(5)
    expect(car.odometer).toBe(15)
  })
  it('driving ASYNC resolves to the updated odometer', async () => {
    expect(await car.driveAsync(10)).toBe(10)
  })
})