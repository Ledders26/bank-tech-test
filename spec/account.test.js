const Account = require('../lib/account')

beforeEach(() => {
  account = new Account();
});

describe("getBalance", () => {
  xit("should have a starting balance of 0", () => {
    expect(account.getBalance()).toEqual(0)
  });
});

describe("deposit", () => {
  xit("should allow money to be deposited into the account and update the balance", () => {
    account.deposit(30, "28-03-2022")
    expect(account.getBalance()).toEqual(30)
  });
});

describe("withdraw", () => {
  xit("should allow money to be withdrawn from the account and the balance updated", () => {
    account.withdraw(30, "28-03-2022")
    expect(account.getBalance()).toEqual(-30)
  });
});

describe("getTransactions", () => {
  xit("should store a transaction within an array of transactions when completed", () => {
    account.deposit(100)
    expect(account.getTransactions().length).toEqual(1)
  });
});

describe("requestStatement", () => {
  xit("should create a new Statement when requested", () => {
  expect(typeof (account.requestStatement())).toBe('object')
  });
});