const Account = require('../../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("Make a Deposit then return a statement showing it", () => {
  it("should return a statement when transactions recorded", () => {
    const solution = "date || credit || debit || balance\r\n14/01/2023 || || 500 || 2500\r\n13/01/2023 || 2000 || || 3000\r\n10/01/2023 || 1000 || || 1000"
    account.deposit(1000, "10-01-2023")
    account.deposit(2000, "13-01-2023")
    account.withdraw(500, "14-01-2023")
    expect(account.requestStatement()).toEqual(solution)
  });
});