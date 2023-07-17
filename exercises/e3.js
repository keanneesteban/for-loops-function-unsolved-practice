
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  var average = sum / array.length;
  return average;
}

console.log(getAverage([22, 45, 4, 65]));


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}

console.log(getStringSum("GH2U87A"));
console.log(getStringSum("GHIUJUHSG"));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
