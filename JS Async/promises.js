// Promise is ES6 version
// How to create a promise - pending, resolve, reject

const promise1 = new Promise((resolve, reject) => {
  let compleatePromise = false;
  if (compleatePromise) {
    resolve("Compleate promise 1");
  } else {
    reject("Not compleate promise 1");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const promise2 = new Promise((resolve, reject) => {
  resolve("Compleate promise 2");
});

promise2.then((res) => console.log(res));

/*
const statuss = true;
console.log("Task 1");

// Promise definition
const promises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (statuss) {
      resolve("Task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

// promise call
promises
.then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log(error);
});

console.log("Task 3");
*/
