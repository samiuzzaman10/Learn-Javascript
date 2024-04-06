// Template Literals
let a = 5;
let b = 6;
// console.log(`${a} * ${b} = ${a * b}`);

// console.log(`My name is Rahat.
// I am 22 years old.`);


// Tagged Template Literals
function modifier(strings, ...values) {
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift(): "")
    }, "");
    return m;
}

const player1 = "Sakib";
const player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);