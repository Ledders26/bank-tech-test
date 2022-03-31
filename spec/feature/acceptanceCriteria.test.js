const Account = require("../../lib/account");
const MockDate = require('mockdate')
const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

Date.now = jest.fn(() => Date.parse('01/01/2023'));

beforeEach(() => {
  MockDate.set("01/01/2023");
  account = new Account();
});

describe("Make a Deposit then return a statement showing it", () => {
  it("should return a statement when transactions recorded", () => {
    const solution =
      "date || credit || debit || balance\r\n01/01/2023 || || 500.00 || 2500.00\r\n01/01/2023 || 2000.00 || || 3000.00\r\n01/01/2023 || 1000.00 || || 1000.00";
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    account.requestStatement()
    expect(console.log).toHaveBeenLastCalledWith(solution);
  });
});
