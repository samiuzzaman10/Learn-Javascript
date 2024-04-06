// const display = () => "This is arrow function";
// console.log(display());

// const Addition = (a, b) => a + b;
// console.log(Addition(5, 10));

// Arrow function with map & filter
let student = [
  {
    id: 101,
    name: "Samiuzzaman Chowdhury",
    GPA: 2.89,
  },
  {
    id: 102,
    name: "Mehedi Zaman",
    GPA: 3.65,
  },
  {
    id: 103,
    name: "Mobarak Hossain",
    GPA: 4.38,
  },
];

const studentName = () => student.filter((x) => x.GPA > 3).map((y) => y.name);
//console.log(studentName(student));

const students = [
  {
    id: 101,
    gpa: 3.5,
  },
  {
    id: 102,
    gpa: 5,
  },
  {
    id: 101,
    gpa: 4.85,
  },
];
// console.log(students.findIndex((x) => x.gpa > 4));

/*
var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraes: function () {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};
javascript.printLibraes();
*/

