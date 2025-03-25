// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance,
// replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicateNumber(times, num) {
  let arr = [];

  //Base Case
  if (times < 0) {
    return [];
    // Recursive Case
  } else
    while (arr.length < times) {
      replicateNumber(times - 1, arr.push(num));
    }
  return arr;
}

console.log(replicateNumber(3, 5)); // [5, 5, 5]
console.log(replicateNumber(1, 69)); // [69]
console.log(replicateNumber(-2, 6)); // []
