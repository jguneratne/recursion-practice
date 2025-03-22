// Quiz from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// QUESTION 6: Write a function called contains that searches for a value in a nested object.
// It returns true if the object contains that value.

var nestedObject = {
  array: [
    {
      data: {
        info: {
          stuff: {
            thing: {
              moreStuff: {
                magicNumber: 44,
                something: "foo2",
              },
            },
          },
        },
      },
    },
    {
      moredata: {
        something: "foo3",
      },
    },
  ],
};

// function contains(obj, value) {
//   // Base case: if object property name contains the searched value (44 in this case), return true
//   let arr = Object.values(obj);
//   console.log(arr);

//   if (arr.includes(value)) {
//     return true;
//   }

//   // Search each property name until a string value is found
//   else
//     for (let i = 0; i < arr.length; i++) {
//       arr = arr[0];
//       console.log(arr);

//       if (!arr[0]) {
//         return false;
//       } else {
//         return contains(arr, value);
//       }
//     }
// }

// function contains(obj, value) {
//   // Base case: if object property name contains the searched value (44 in this case), return true
//   let arr = Object.values(obj);
//   console.log(arr);

//   if (arr.includes(value)) {
//     return true;
//   }

//   // Search each property name until a string value is found

//   const nextProp = arr.find((prop) => typeof prop === "object");

//   if (typeof nextProp === "object") {
//     arr = nextProp;
//     console.log(arr);
//   }

//   if (!nextProp) {
//     return false;
//   } else {
//     return contains(arr, value);
//   }
// }

let hasIt = contains(nestedObject, 44);
console.log(hasIt); // true

let doesntHaveIt = contains(nestedObject, "foo");
console.log(doesntHaveIt); // false

//PRACTICE FINDING PROPERTY OF UN-NESTED OBJECT
// const object = {
//   foo: "hello",
//   bar: "goodbye",
//   baz: "hey",
// };

// function findProperty(objectName, toFind) {
//   if (objectName[toFind]) {
//     console.log("true");
//     console.log(objectName[toFind]);
//   }
// }

// findProperty(object, "foo");

// TOP'S MORE ACCURATE SOLUTION

// // solution to problem #6 in recursive exercises
// function contains(object, searchValue) {
//   // because `null` has a typof "object", we have to explicitly check
//   // to prevent trying to access `null`'s values (which don't exist)
//   if (typeof object !== "object" || object === null) {
//     return object === searchValue;
//   }

//   for (const value of Object.values(object)) {
//     // An important problem in the code quiz solution is that `return contains()` will only
//     // search the first property of an object, as it will return whatever the result for it is.
//     // If our value was nested within the second property, for example, it would never get checked
//     // even if the first nested object did not contain it.
//     if (contains(value, searchValue)) {
//       return true;
//     }
//   }
//   return false;
// }
