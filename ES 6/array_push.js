const numbers = [1, 2, 3, 4, 5];
numbers.push(6)
const push = numbers.push(7, 8, 9);
numbers.push([10, 20, 30]);

console.log(numbers);
console.log(push);