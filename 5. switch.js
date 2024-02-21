var Marks = 15;
switch (true) {
  case Marks <= 100 && Marks >= 80:
    document.write("A+");
    break;

  case Marks < 79 && Marks >= 70:
    document.write("A");
    break;

  case Marks < 69 && Marks >= 60:
    document.write("A-");
    break;

  case Marks < 59 && Marks >= 50:
    document.write("B");
    break;

  case Marks < 49 && Marks >= 40:
    document.write("C");
    break;

  case Marks < 39 && Marks >= 33:
    document.write("D");
    break;
  default:
    document.write("F");
}



const day = 0;

switch (day) {
  case 0:
    console.log("Monday");
    break;

  case 1:
    console.log("Tuesday");
    break;

  case 2:
    console.log("Wednesday");
    break;

  case 3:
    console.log("Thursday");
    break;

  case 4:
    console.log("Friday");
    break;

  case 5:
    console.log("Saturday");
    break;

  case 6:
    console.log("Sunday");
    break;
  default:
    throw new Error("Invalid day");
}
