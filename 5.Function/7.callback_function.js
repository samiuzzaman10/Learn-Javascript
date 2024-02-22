// const arr = [1, 2, 3];

// sum = 0;
// arr.forEach((v) => {
//   // console.log("value", v + v);
//   sum += v;;
// });
// console.log(sum);

function toUpper(str, cb) {
  const upper = str.toUpperCase();
  cb(upper);
}
toUpper("samiuzzaman", (str) => {
    console.log("Hello", str);
})