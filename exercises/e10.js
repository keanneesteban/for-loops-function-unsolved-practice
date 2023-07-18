// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  var accountHolders = [];

  for (var i = 0; i < array.length; i++) {
    var name = array[i].name;

    if (name.toLowerCase().includes(letter.toLowerCase())) {
      accountHolders.push(name);
    }
  }

  return accountHolders;
}

const bankAccounts = [
  { id: 1, name: "Susan", balance: 100.32 },
  { id: 2, name: "Morgan", balance: 1100.0 },
  { id: 3, name: "Joshua", balance: 18456.57 },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18 },
];

console.log(getClientsWithLetterInName(bankAccounts, 'e'));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
