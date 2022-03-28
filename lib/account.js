class Account {

  constructor() {
    this.balance = 0
    this.transactions = []
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount
    this.transactions.push(this.balance)
  }

  withdraw(amount) {
    this.balance -= amount
    this.transactions.push(this.balance)
  }

  getTransactions() {
    return this.transactions
  }
}

module.exports = Account;