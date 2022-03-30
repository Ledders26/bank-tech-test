const Account = require("../lib/account");

beforeEach(() => {
  account = new Account();
});

describe("deposit", () => {
  it("should allow money to be deposited into the account and update the balance", () => {
    account.deposit(30, "28-03-2022");
    expect(account.balance).toEqual(30);
  });
});

describe("withdraw", () => {
  it("should allow money to be withdrawn from the account and the balance updated", () => {
    account.withdraw(30, "28-03-2022");
    expect(account.balance).toEqual(-30);
  });
});

describe("getTransactions", () => {
  it("should store a transaction within an array of transactions when completed", () => {
    account.deposit(100, "28-03-2022");
    expect(account.transactions.length).toEqual(1);
  });
});

describe("requestStatement", () => {
  it("should create a new Statement when requested", () => {
    expect(account.requestStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
