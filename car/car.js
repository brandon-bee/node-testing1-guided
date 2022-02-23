// Build a Car class!
function badCar() {
  return {
    model: 'Prius',
    make: 'Toyota'
  }
}

class Car {
  constructor(make, model) {
    this.make = make,
    this.model = model,
    this.odometer = 0
  }
  drive(miles) {
    this.odometer += miles
    return this.odometer
  }
  async driveAsync(miles) {
    this.odometer += miles
    return this.odometer
  }
}

module.exports = {
  badCar,
  Car
}