// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(num) {
  if (num === 1) {
    return 1;
  }

  console.log(num);
  return num + sumRange(num - 1);
}

//let output = sumRange(3);
//console.log(output);

// Another option for question 1

function sum(num, total = 0) {
  if (num <= 0) {
    return total;
  }

  console.log(num);
  return sum(num - 1, total + num);
}

//let sumResult = sum(3);
//console.log(sumResult);
