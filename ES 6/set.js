/*Pass an Array to the new Set() constructor:
const letters = new Set(["a", "b", "c"]); */

// Create a Set and add values:
const mySet = new Set();
mySet.add("Samiuzzaman");
mySet.add("Chowdhury");
console.log(mySet);

// Add Variables to the Set
const player = new Set();
let player1 = "Ross Taylor";
let player2 = "Kane Williamson";
let player3 = "Trent Boult";

player.add(player1);
player.add(player2);
player.add(player3);
console.log(player);

// The forEach() method invokes (calls) a function for each Set element:
const alphabet = new Set(["A", "B", "C", "D", "E"]);
alphabet.forEach(function (value) {
  console.log(value);
});

// The values() method returns a new iterator object containing all the values in a Set:
console.log(player.values());

for (const x of player.values()) {
  console.log(x);
}