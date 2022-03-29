const Statement = require('../lib/statement')
const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("printStatement", () => {
  it("should return headers only when no recorded transactions", () => {
    statement = new Statement()
    expect(statement.printStatement()).toEqual("date || credit || debit || balance")
  });

  it("should return a statement when passed in transaction details", () => {
    statement = new Statement([{date: "01-01-2022", amount: 2000, balance: 2000}])
    expect(statement.printStatement()).toEqual("date || credit || debit || balance\r\n01/01/2022 || 2000 || || 2000")
  });
});
