// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

const nums = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]; // 7

const array = [1, 2, 3];

//THIS WORKS BUT ISN'T CORRECT WAY TO DO THIS

// function totalIntegers(arr, index, count) {
//   //  console.log(arr);

//   // Base Case: At end of array, return integer count
//   if (index === arr.length) {
//     return count;
//   }

//   // Recursive Case: look through each arr index and increment count if it's a number
//   if (index < arr.length && typeof arr[index] === "number") {
//     count++;
//     console.log(count);
//   }

//   return totalIntegers(arr, index + 1, count);
// }

// let i = totalIntegers(nums.flat(Infinity), 0, 0);
// console.log(i);

//KEEP CODE ABOVE

function totalIntegers(arr) {
  let total = 0;

  // Base Case
  if (Array.isArray(arr) || !Number.isInteger(arr)) {
    return 0;
  } else if (!Array.isArray(arr) && Number.isInteger(arr)) {
    return 1;
  } else {
    for (let i; i < arr.length; i++) {
      // Recursive Case
      total += totalIntegers(arr);
    }
  }

  return total;
}

let howManyIntegers = totalIntegers(nums);
console.log(howManyIntegers);
