const Account = require("../../lib/account");
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();


beforeEach(() => {
  account = new Account();
});

describe("Make a Deposit then return a statement showing it", () => {
  it("should return a statement when transactions recorded", () => {
    account.deposit(1000, "10-01-2023");
    account.requestStatement()
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance\r\n10/01/2023 || 1000.00 || || 1000.00"
    );
  });
});
