// startwith (searchstring, position) -> check a string starts with another string
const message1 = "Today is friday";
console.log(message1.startsWith("Today", 0));

// endwith (searchString, length) -> check a string ends with another string
const message2 = "Today is friday";
console.log(message2.endsWith("friday", 15));

// includes (searchString, position) -> check if a string contains another string
const message3 = "Today is friday";
console.log(message3.includes("is", 6));

// all these methods are case sensitive
