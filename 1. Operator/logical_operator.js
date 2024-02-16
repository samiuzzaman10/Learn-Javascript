let k = 50, l = 100;

// && (Logical AND)
let operation = (k > 200) && (l < 150);
console.log("(" + k + " > 20) && (" + l + " < 150) == " + operation);

// ||(Logical OR)
operation = (k > 200 || l < 150);
console.log("(" + k + " > 20) || (" + l + " < 150) == " + operation);

/* !(Logical NOT) */
console.log("Operation = " + operation + " and Not Operation = " + !operation);