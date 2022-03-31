const Statement = require("../lib/statement");
const Account = require("../lib/account");
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

beforeEach(() => {
  account = new Account();
});

describe("printStatement", () => {
  it("should return headers only when no recorded transactions", () => {
    statement = new Statement();
    account.requestStatement()
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance"
    );
  });

  it("should return a statement when passed in transaction details", () => {
    statement = new Statement([
      { date: "01-01-2022", amount: 2000.0, balance: 2000.0 },
    ]);
    statement.printStatement()
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance\r\n01/01/2022 || 2000.00 || || 2000.00"
    );
  });
});
