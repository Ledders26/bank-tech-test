const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("Account", () => {
  it("should have a starting balance of 0", () => {
    expect(account.getBalance()).toEqual(0)
  });

  it("should allow money to be deposited into the account and update the balance", () => {
    account.deposit(30)
    expect(account.getBalance()).toEqual(30)
  });
});