class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  getArea() {
    return this.length * this.width
  }

  getPerimeter() {
    return (this.length + this.width) * 2
  }

  isSquare() {
    if (this.length === this.width) {
      return true
    } else {
      return false
    }
  }
}

class Vehicle {
  // color = "black"
  passengers = []
  constructor(type, capacity, color = "black") {
    this.type = type
    this.capacity = capacity
    this.color = color
  }

  paint(color) {
    this.color = color
    return this.color
  }

  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger)
      return this.passengers.length
    } else {
      return -1
    }
  }
}

class PasswordManager {
  #password
  constructor(password) {
    this.#password = password
  }

  checkPassword(attempt) {
    if (attempt === this.#password) {
      return true
    } else {
      return false
    }
  }

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword
      return true
    } else {
      return false
    }
  }
}

class TodoList {
  list = []
  constructor(title) {
    this.title = title
  }

  addItem(description) {
    this.list.push(description)
    return this.list.length
  }

  removeItem(description) {
    if (this.list.indexOf(description) === -1) {
      return null
    } else {
      return this.list.splice(this.list.indexOf(description), 1).toString()
    }
  }
  getItems() {
    return [...this.list]
  }
}

class BankAccount {
  #balance
  static #total = []
  constructor(firstName, lastName, startingBalance = 0) {
    this.firstName = firstName
    this.lastName = lastName
    this.#balance = startingBalance
    BankAccount.#total.push(startingBalance)
  }

  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`
  }

  deposit(amount) {
    this.#balance += amount
    BankAccount.#total.push(amount)
    return `Your balance is $${this.#balance.toFixed(2)}`
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "You do not have enough funds."
    }
    this.#balance -= amount
    BankAccount.#total.push(-amount)
    return `Your balance is $${this.#balance.toFixed(2)}.`
  }

  static getTotalHoldings() {
    const here = BankAccount.#total.reduce((acc, curr) => acc + curr, 0)
    return here
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
