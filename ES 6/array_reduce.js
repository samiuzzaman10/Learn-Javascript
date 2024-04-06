const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue
}, 0);
console.log(sum);

// const fruits = ["Apple", "Banana", "Mango"];
// const reduce = fruits.reduce((previousValue, currentValue) => {
//   return prevValue + currentValue;
// }, 0);
// console.log(reduce);
