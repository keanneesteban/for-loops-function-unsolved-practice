
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    let sum = 0;
    const account = array[i];

    if (account.deposits && account.deposits.length > 0) {
      for (var j = 0; j < account.deposits.length; j++) {
        sum += account.deposits[j];
      }
    }

    if (sum < 2000 || (!account.deposits || account.deposits.length === 0)) {
      result.push(account);
    }
  }

  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
