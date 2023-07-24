// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
    if (array.length === 0) {
      return '';
    }
  
    let result = array[0].toString(); 
  
    for (let i = 1; i < array.length; i++) {
      result += separator + array[i].toString(); 
    }
  
    return result;
  }

var array = ['a', 'b', 'c'];
var separator = '-';

console.log(joinToString(array, separator));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
