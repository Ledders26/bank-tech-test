const Statement = require("./statement")

class Account {

  constructor() {
    this.balance = 0
    this.transactions = []
  }

  getBalance() {
    return this.balance
  }

  deposit(amount, date) {
    this.balance += amount
    this.transactions.push([date, amount, this.balance])
  }

  withdraw(amount, date) {
    this.balance -= amount
    this.transactions.push([date, -amount, this.balance])
  }

  getTransactions() {
    return this.transactions
  }

  requestStatement() {
    let statement = new Statement(this.transactions)
    return statement
    //statement.printStatement()
  }
}

module.exports = Account;