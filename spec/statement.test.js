const Statement = require('../lib/statement')
const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
  statement = new Statement();
});

describe("printStatement", () => {
  it("should return headers only when no recorded transactions", () => {
    expect(statement.printStatement()).toEqual("date || credit || debit || balance")
  });

  it("should return a statement when transactions recorded", () => {
    account.deposit(1000.00, "10-01-2023")
    expect(statement.printStatement()).toEqual("date || credit || debit || balance\r\n10-01-2023 || 1000.00 || || 1000.00")
  });
});