const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("getBalance", () => {
  it("should have a starting balance of 0", () => {
    expect(account.getBalance()).toEqual(0)
  });
});

describe("deposit", () => {
  it("should allow money to be deposited into the account and update the balance", () => {
    account.deposit(30)
    expect(account.getBalance()).toEqual(30)
  });
});

describe("withdraw", () => {
  it("should allow money to be withdrawn from the account and the balance updated", () => {
    account.withdraw(30)
    expect(account.getBalance()).toEqual(-30)
  });
});

describe("getTransactions", () => {
  it("should store a transaction within an array of transactions when completed", () => {
    account.deposit(100)
    expect(account.getTransactions().length).toEqual(1)
  });
})