// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 2: Power function
// Write a function called power which takes in a base and an exponent.
// If the exponent is 0, return 1.

function power(num, pow) {
  if (pow === 0) {
    return 1;
  }

  return num * power(num, pow - 1);
}

//let powResult = power(2, 3);
//console.log(powResult);
