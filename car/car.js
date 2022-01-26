// Build a Car class!
function makeFive() {
  return 5
}

async function makeFour() {
  return 4
}

function makeObj() {
  return {}
}

class Car {
  constructor(model, make)
  {
    this.make = make
    this.model = model
    this.odometer = 0
  }
}

module.exports = {
  makeFive,
  makeFour,
  makeObj,
  Car,
}
