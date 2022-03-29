class Statement {

  constructor(transactions) {
    this.statement = ""
    this.transactions = transactions
  }

  printStatement() {
    this.createStatement()
    return this.statement
  }

  createStatement() {
    this.addHeader()
    this.addTransactions()
  }

  addHeader() {
    this.statement += "date || credit || debit || balance"
  }

  addTransactions() {
    //if()
  }
}

module.exports = Statement;