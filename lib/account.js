const Statement = require("./statement");

class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount) {
    this.transactions.push({
      date: this.#date(),
      amount: amount,
    });
  }

  withdraw(amount) {
    this.transactions.push({
      date: this.#date(),
      amount: -amount,
    });
  }

  requestStatement() {
    let statement = new Statement(this.transactions);
    return statement.printStatement();
  }

  #date() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

module.exports = Account;
