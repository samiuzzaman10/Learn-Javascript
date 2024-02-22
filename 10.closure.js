function multiplier(t) {
  return function (n) {
    return n * t;
  };
}

const multiplierBy5 = multiplier(5);
console.log(multiplierBy5(10));
console.log(multiplierBy5(20));
console.log(multiplierBy5(5));
console.log(multiplierBy5(15));
console.log(multiplierBy5(25));

const multiplierBy10 = multiplier(10);
console.log(multiplierBy5(10));
console.log(multiplierBy5(20));
console.log(multiplierBy5(5));
console.log(multiplierBy5(15));
console.log(multiplierBy5(25));
