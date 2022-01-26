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
  constructor() {
    this.model = 'prius'
  }
}

module.exports = {
  makeFive,
  makeFour,
  makeObj,
  Car,
}
