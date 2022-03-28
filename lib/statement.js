class Statement {

  constructor() {
    this.statement = ""
  }

  printStatement() {
    return this.statement
  }

  createStatement() {
    this.addHeader(this.statement)
  }

  addHeader(statement) {
    this.statement += "date || credit || debit || balance"
  }
}

module.exports = Statement;