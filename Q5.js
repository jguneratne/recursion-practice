// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and
// returns the product of them all

// Array to sum
let sumNums = [10, 4, 8, 2, 9]; // sum = 33

// Recursive function

// function sumArray(arr) {
//   if (arr.length < 1) {
//     return 0;
//   }

//   let total = arr[0] + sumArray(arr.pop());
//   console.log(total);
// }

function sumArray(arr) {
  if (arr.length < 1) {
    return 0;
  }

  return arr.pop() + sumArray(arr);
}

let arrayTotal = sumArray(sumNums);
console.log(arrayTotal);
