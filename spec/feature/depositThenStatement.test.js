const Account = require("../../lib/account");
const MockDate = require("mockdate");
const consoleSpy = jest.spyOn(console, "log").mockImplementation();

beforeEach(() => {
  MockDate.set("01/01/2023");
  account = new Account();
});

describe("Make a Deposit then return a statement showing it", () => {
  it("should return a statement when transactions recorded", () => {
    account.deposit(1000);
    account.requestStatement();
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance\r\n01/01/2023 || 1000.00 || || 1000.00"
    );
  });
});
