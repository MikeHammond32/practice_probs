// Brian [9:28 PM]
// Solve the following problems first in Ruby, then convert the solution to JavaScript.
// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps

// function reverse(string) {
//   var newString = [];
//   var stringSplit = string.split('//');
//   for (var i = (string.length - 1); i > 0; i--) {
//     newString.push(stringSplit); 
//   }
//   return newString.join ;
// }
// console.log(reverse("bbq"));

// function aCount(string) {
//   var count = 0;
//   for (var i = 0; i < string.length; i++) {
//     string.split("");
//     if (string[i] == "a") {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(aCount("Yamaha"));

function search(ascendingArray, number) {
  var counter = 0;
  ascendingArray.forEach(function(numberChange) {
    if (numberChange === number) {
      return counter;
    } else {
      counter += 1;
    }
  });
}
console.log(search([1, 2, 3, 4], 2));