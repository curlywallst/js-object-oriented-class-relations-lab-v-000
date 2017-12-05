let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers:[], passengers:[], trips:[]}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips() {

  }
  passengers() {

  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips() {

  }

  drivers() {

  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver() {
    let idOfDriver = this.driverId
    debugger
    return store.drivers.find(function(driver) {
      return driver.id === idOfDriver
    })
  }

  passenger() {
    let idOfPassenger = this.passengerId
    debugger
    return store.passengers.find(function(passenger) {
      return passenger.id === idOfPassenger
    })
  }
}
