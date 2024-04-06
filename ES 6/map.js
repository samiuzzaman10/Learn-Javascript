// You can create a Map by passing an Array to the new Map() constructor:
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);

// You can add elements to a Map with the set() method:
const me = new Map();
me.set("Samiuzzaman", 22);
console.log(me);

// The get() method gets the value of a key in a Map:
let year = me.get("Samiuzzaman");
console.log(year);

// The delete() method removes a Map element:
fruits.delete("apples");
console.log(fruits);

// The has() method returns true if a key exists in a Map:]
console.log(fruits.has("apples"));
console.log(fruits.has("bananas"));

// The forEach() method calls a function for each key/value pair in a Map:
fruits.forEach(function (value, key) {
  console.log(key);
  console.log(value);
});

// The entries() method returns an iterator object with the [key, values] in a Map:
for (const x of fruits.entries()) {
  console.log(x);
} 