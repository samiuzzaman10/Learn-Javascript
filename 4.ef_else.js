var Marks = 93;

if (Marks >= 80 && Marks <= 100) {
  document.write("A+");
} else if (Marks < 80 && Marks >= 70) {
  document.write("A");
} else if (Marks < 70 && Marks >= 60) {
  document.write("A-");
} else if (Marks < 60 && Marks >= 50) {
  document.write("B");
} else if (Marks < 50 && Marks >= 40) {
  document.write("C");
} else if (Marks < 40 && Marks >= 33) {
  document.write("D");
} else {
  document.write("F");
}

// your age 20, your Brother age 30. who is elder?

const yourAge = 20;
const YourBrotherAge = 20;

if (yourAge > YourBrotherAge) {
  console.log("You are Elder");
} else {
  console.log("Your Brother is Elder");
}

// your age 25, your Brother age 25. who is elder?

const yourAge = 25;
const YourBrotherAge = 25;

if (yourAge > YourBrotherAge) {
  console.log("You are Elder");
} else if (YourBrotherAge > yourAge) {
  console.log("Your Brother is Elder");
} else {
    console.log("You both are same");
}
