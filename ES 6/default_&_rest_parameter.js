// default parameter
"use strict";
function message(text = "Hello this is default parameter") {
  console.log(`${text}`);
}
message();
message("My name is Samiuzaman");

// rest parameter
function printNumber(x, y, ...z) {
  console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
printNumber(10, 20, 30, 40, 50);