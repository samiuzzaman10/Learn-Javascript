// Array.prototype.find()
/*
const numbers = [1, 2, 3, 4, 5, 6, 10];

const findNumber = numbers.find(findNumbers)

function findNumbers(value, index, array) {
  return value > 4
}

console.log(numbers);
console.log(findNumber);
*/

// Find Index
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const indexNumber = numbers.findIndex((value, index, array) => {
  return value > 16;
});
console.log(indexNumber);