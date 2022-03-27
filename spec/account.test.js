const Account = require('../lib/account')

describe("Account", () => {
  it("should have a starting balance of 0", () => {
    account = new Account();
    expect(account.getBalance()).toEqual(0)
  });
});