// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 3: Calculate factorial
//Write a function that returns the factorial of a number.
// As a quick refresher, a factorial of a number is the result of that number
// multiplied by the number before it, and the number before that number, and so on,
// until you reach 1. The factorial of 1 is just 1.

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return factorial(num - 1) * num;
}

//let factorialResult = factorial(4);
//console.log(factorialResult);
