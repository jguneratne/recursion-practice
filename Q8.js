// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

const arrOne = [1, 2, 3];

const arrTwo = [[1, 2], 3];

const arrThree = [[[[[[[[[1]]]]]]]]];

const arrFour = [10, [[10], 10], [10]];

function sumSquares(arr) {
  let total = 0;

  // Base Case
  if (!Array.isArray(arr) && Number.isInteger(arr)) {
    // return the square of the numbers
    return Math.pow(arr, 2);
  } else if (!Array.isArray(arr) && !Number.isInteger(arr)) {
    return 0;
  } else {
    // Recursive Case
    for (let i = 0; i < arr.length; i++) {
      total += sumSquares(arr[i]);
    }
  }

  return total;
}

// let sumSquaresOne = sumSquares(arrOne);
// console.log(sumSquaresOne); // 1 + 4 + 9 = 14

// let sumSquaresTwo = sumSquares(arrTwo);
// console.log(sumSquaresTwo); // 1 + 4 + 9 = 14

// let sumSquaresThree = sumSquares(arrThree);
// console.log(sumSquaresThree); // 1 = 1

let sumSquaresFour = sumSquares(arrFour);
console.log(sumSquaresFour); // 100 + 100 + 100 + 100 = 400
