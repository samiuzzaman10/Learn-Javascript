// synchronus programming
const taskOne = () => {
  console.log("Task 1");
};

// asynchronus programming
const dataLoading = () => {
  console.log("Task 2. Data Loading");
};
const taskTwo = () => {
  setTimeout(dataLoading, 2000);
};

const taskThree = () => {
  console.log("Task 3");
};
const taskFour = () => {
  console.log("Task 4");
};

taskOne();
taskTwo();
taskThree();
taskFour();

console.log("Line 1 code");

setTimeout(function () {
  console.log("Line 2 code");
}, 2000);
// setInterval(function(){
//   console.log("Line 2 code");
// }, 2000);

console.log("Line 3 code");
