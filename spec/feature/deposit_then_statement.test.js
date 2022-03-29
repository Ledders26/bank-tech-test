const Statement = require('../../lib/statement')
const Account = require('../../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("Make a Deposit then return a statement showing it", () => {
  it("should return a statement when transactions recorded", () => {
    account.deposit(1000, "10-01-2023")
    expect(account.requestStatement()).toEqual("date || credit || debit || balance\r\n10/01/2023 || 1000 || || 1000")
  });
});