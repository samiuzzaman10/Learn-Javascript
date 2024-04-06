// Falsy value - False , 0 , "", null, Undefined, NaN

// var myVar = 5;
// if(myVar) {
//   console.log('I am truthy');
// } else {
//   console.log("I am falsy");
// }

const array = ["Rahat", 10, false, 0, true, NaN, "Apple", null];

// return truty values
for (let item of array) {
  if (item) {
    console.log(item);
  }
}
console.log("---------------");
// return fasly values
for (let item of array) {
  if (!item) {
    console.log(item);
  }
}
