// Normal System
/*
function addNumbers(x, y, z){
    return x + y + z;
}
let numbers = [1, 2, 3];
console.log(addNumbers(numbers[0], numbers[1], numbers[2]));
*/

// Spread Operator
/*
function addNumbers(x, y, ...z) {
  return x + y + z;
}

let number1 = [1, 2, 3];
console.log(addNumbers(...numbers));

let numbers1 = [5, 6, ...numbers];
console.log(numbers1);
*/

// use // Spread Operator concat array
let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
let numbers = [...number1, ...number2];
// console.log(numbers);

// use // Spread Operator concat Object
let p1 = {
  name: "Samiuzzaman",
  age: 22,
};

let p2 = {
    nationality: "Bangladesh",
    occupation: "Student"
}
let p = {...p1, ...p2};
console.log(p);
