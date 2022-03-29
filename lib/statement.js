class Statement {

  constructor(transactions = []) {
    this.statement = ""
    this.transactions = transactions
  }

  printStatement() {
    this.createStatement()
    return this.statement
  }

  createStatement() {
    this.addHeader()
    if(this.transactions.length > 0) {this.addTransactions()}
  }

  addHeader() {
    this.statement += "date || credit || debit || balance"
  }

  addTransactions() {
    this.transactions.forEach((txn) => {
      if(txn.amount > 0) {
        this.statement += `\r\n${txn.date} || ${txn.amount} || || ${txn.balance}`
      } else {
        this.statement += `\r\n${txn.date} || || ${txn.amount} || ${txn.balance}`
      } });
  }
}

module.exports = Statement;