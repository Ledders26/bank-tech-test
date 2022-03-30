# bank-tech-test

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023
**And** a deposit of 2000 on 13-01-2023
**And** a withdrawal of 500 on 14-01-2023
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Design

### Initial Planning/Preparation

See I/O and Class Models [here](https://docs.google.com/spreadsheets/d/1LCohqfYhAP2VekmvqACULLQWGYk3ixapEKr2JmXUamI/edit#gid=0)

## Functionality

Clone this repo, then change into the directory:

```
git clone https://github.com/Ledders26/bank-tech-test.git
cd bank-tech-test
npm install
```

### How to Test

To run the tests:

```
jest
```

To run just the acceptance criteria test:

```
jest acceptanceCriteria.test.js
```

### How to Run

Using Node, this is how you would achieve the success criteria:

```
node
const Account = require('./lib/account)
account = new Account()
account.deposit(1000, "10-01-2023")
account.deposit(2000, "13-01-2023")
account.withdraw(500, "13-01-2023")
account.requestStatement()
```

## Process

I followed a TDD process from start to finish, and aimed to commit to git whenever I had a passing test. I did some initial planning, as detailed above in the planning section, but as often is the case, the final product ends up slightly different as a solution evolves.

Initially I had expected to have a single class, but quite quickly during design I realised that I needed a separate one for formatting a statement.

## Screenshot

This is a screenshot of the app running through the acceptance criteria:

[screenshot](public/screenshot.png)