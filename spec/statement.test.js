const Statement = require('../lib/statement')
const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("printStatement", () => {
  it("should return headers only when no recorded transactions", () => {
    statement = new Statement();
    expect(statement.printStatement()).toEqual("date || credit || debit || balance")
  });
});