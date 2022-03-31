const Statement = require("./statement");

class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount, date) {
    this.transactions.push({
      date: date,
      amount: amount,
    });
  }

  withdraw(amount, date) {
    this.transactions.push({
      date: date,
      amount: -amount,
    });
  }

  requestStatement() {
    let statement = new Statement(this.transactions);
    return statement.printStatement();
  }
}

module.exports = Account;
