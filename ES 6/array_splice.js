const numbers1 = [1, 2, 3, 4, 5];

const splice1 = numbers1.splice(1, 2, 10, 30, 123);
console.log(numbers1);
console.log(splice1);

const numbers2 = [1, 2, 3, 4, 5];
const splice2 = numbers2.splice(-1, 2, 10, 30, 123);
console.log(numbers2);
console.log(splice2);