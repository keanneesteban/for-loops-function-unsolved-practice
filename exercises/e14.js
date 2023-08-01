
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    let sumDeposits = 0;
    let sumWithdrawals = 0;

    if (account.deposits && account.deposits.length > 0) {
      for (let j = 0; j < account.deposits.length; j++) {
        sumDeposits += account.deposits[j];
      }
    }

    if (account.withdrawals && account.withdrawals.length > 0) {
      for (let j = 0; j < account.withdrawals.length; j++) {
        sumWithdrawals += account.withdrawals[j];
      }
    }

    let calculatedBalance = sumDeposits - sumWithdrawals;

    if (calculatedBalance !== account.balance) {
      wrongBalance.push(account);
    }
  }

  return wrongBalance;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
