const person1 = {};
person1.firstName = "Samiuzzaman";
person1.lastName = "Chowdhury";
person1.email = "chowdhurysamiuzzaman@gmail.com";
console.log(person1);


const person2 = {
  firstName: "Samiuzzaman",
  lastName: "Chowdhury",
  email: "chowdhurysamiuzzaman@gmail.com",
};
person2.id = "35499";
person2.age = 15;
person2.phone = "01581103316"

const key = "age"; 
console.log(person2[key]);

// Remove
delete person2.age;
delete person2.lastName;
