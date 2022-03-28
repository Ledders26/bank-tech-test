const Statement = require('../lib/statement')

beforeEach(() => {
  statement = new Statement();
});

describe("printStatement", () => {
  it("should return an empty statement when no recorded transactions", () => {
    statement.createStatement()
    expect(statement.printStatement()).toEqual("date || credit || debit || balance")
  });
});