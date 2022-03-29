const Statement = require("./statement")

class Account {

  constructor() {
    this.balance = 0
    this.transactions = []
  }

  deposit(amount, date) {
    this.balance += amount
    this.transactions.unshift({date: date, amount: amount, balance: this.balance})
  }

  withdraw(amount, date) {
    this.balance -= amount
    this.transactions.unshift({date: date, amount: -amount, balance: this.balance})
  }

  requestStatement() {
    let statement = new Statement(this.transactions)
    return statement.printStatement()
  }
}

module.exports = Account;