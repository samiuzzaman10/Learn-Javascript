// array destructure

/*let numbers = [10, 20, 30, 40, 50];
let [num1, num2, ...num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
*/

// swap variables
/*
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
*/

/* 
const numbers = [1, 2, [3, 100, 500], 4, 5];

const [, , [, a, b]] = numbers;

console.log(a, b);
*/

// object distructure
/*
const studentInfo = {
  id: 101,
  fulName: "Samiuzzaman Chowdhury",
  GPA: 3.92,
};
const {id, fulName, GPA} = studentInfo;

console.log(id);
console.log(fulName);
console.log(GPA);
*/

// nested object distructure
/*
const studentInfo = {
  id: 101,
  fulName: "Samiuzzaman Chowdhury",
  GPA: 3.92,
  language: {
    native: "Bangla",
    programming: "JavaScript",
  },
};
const { fulName, language } = studentInfo;
console.log(fulName);
console.log(language.programming);
*/

// distructuring function parameters
const studentInfo = ({id, fulName}) => {
    console.log(`${id}, ${fulName}`);
};

const student = {
  id: 101,
  fulName: "Samiuzzaman Chowdhury",
};

studentInfo(student);
