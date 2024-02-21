// const p1 = {
//   name: "Samiuzzaman Rahat",
//   email: "samiuzzaman@gmail.com",
// };

// const p2 = {
//   name: "Rifat Chowdhury",
//   email: "rifat@gmail.com",
// };

// const p3 = {
//   name: "Penu Peyash",
//   email: "penu@gmail.com",
// };

// const people = [p1, p2, p3];
// console.log(people[2]);

const peoples = [
  {
    name: "Samiuzzaman Rahat",
    email: "samiuzzaman@gmail.com",
  },
  {
    name: "Rifat Chowdhury",
    email: "rifat@gmail.com",
  },
  {
    name: "Penu Peyash",
    email: "penu@gmail.com",
    friends: ["HM Nayem", "MZ Sifat"],
  },
];

for(let p of peoples) {
    console.log(`${p.name} (${p.email} ${p.friends})`);
}

// console.log(peoples[0].name);
// console.log(peoples[1].email);


