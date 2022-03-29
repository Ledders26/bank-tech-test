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
      if(txn[1] > 0) {
        this.statement += `\r\n${txn[0]} || ${txn[1]} || || ${txn[2]}`
      } else {
        this.statement += `\r\n${txn[0]} || || ${txn[1]} || ${txn[2]}`
      } });
  }
}

module.exports = Statement;