const moment = require('moment');

class Statement {

  constructor(transactions = []) {
    this.statement = ""
    this.transactions = transactions
  }

  printStatement() {
    this.#createStatement()
    return this.statement
  }

  #createStatement() {
    this.#addHeader()
    this.#dateFormat()
    if(this.transactions.length > 0) {this.#addTransactions()}
  }

  #addHeader() {
    this.statement += "date || credit || debit || balance"
  }

  #addTransactions() {
    this.transactions.forEach((txn) => {
      this.statement += "\r\n"
      let date = this.#dateFormat(txn.date)
      txn.amount > 0 ?
      this.statement += `${date} || ${txn.amount.toFixed(2)} || || ${txn.balance.toFixed(2)}`
      : this.statement += `${date} || || ${(-txn.amount).toFixed(2)} || ${txn.balance.toFixed(2)}`;
    });
  }

  #dateFormat(date) {
    const newDate = moment(date, "DD-MM-YYYY")
    return moment(newDate).format("DD/MM/YYYY");
  }
}

module.exports = Statement;