// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every
// value in the array returns true when passed as parameter to the callback function

// Array
let nums = [1, 2, 3, 4, 5, 6];

// Callback function - check if array elem is less than 7
function checkCondition(num) {
  if (num < 7) {
    return true;
  }
}

// Recursive function
function allUnderSeven(arr, i, callback) {
  // If every number in the array was checked without a problem,
  // all elements in the array are less than seven
  if (arr.length === 0) {
    return true;
  }

  // Get the first element of the array
  let currentNum = arr[i];
  console.log(currentNum);

  // Change the array to remove the first element after it's checked
  arr = arr.slice(1);
  console.log(arr);

  // If the callback to check the condition did not return true,
  // not all elements in the array are less than seven
  if (!callback(currentNum)) {
    return false;
  }

  return allUnderSeven(arr, i, callback);
}

const underSeven = allUnderSeven(nums, 0, checkCondition);
console.log(underSeven);
