const moment = require("moment");

class Statement {
  constructor(transactions = []) {
    this.statement = "";
    this.transactions = transactions;
  }

  printStatement() {
    this.#createStatement();
    console.log(this.statement)
  }

  #createStatement() {
    this.#addHeader();
    this.#dateFormat();
    if (this.transactions.length > 0) {
      this.#calculateBalance();
      this.#addTransactions();
    }
  }

  #addHeader() {
    this.statement += "date || credit || debit || balance";
  }

  #addTransactions() {
    let reverseTransactions = this.transactions.reverse()
    reverseTransactions.forEach((txn) => {
      this.balance = 0
      this.statement += "\r\n";
      let date = this.#dateFormat(txn.date);
      txn.amount > 0
        ? (this.statement += `${date} || ${txn.amount.toFixed(2)
          } || || ${txn.balance.toFixed(2)}`)
        : (this.statement += `${date} || || ${(-txn.amount).toFixed(2)
          } || ${txn.balance.toFixed(2)}`);
    });
  }

  #dateFormat(date) {
    const newDate = moment(date, "DD-MM-YYYY");
    return moment(newDate).format("DD/MM/YYYY");
  }

  #calculateBalance() {
    let balance = 0
    this.transactions.forEach((txn) => {
      balance += txn.amount
      txn.balance = balance;
    });
  }
}

module.exports = Statement;
