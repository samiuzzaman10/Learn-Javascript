// Length = LastIndex + 1
// LastIndex = Length - 1

const arr = [];
arr[0] = 1; 
arr[1] = 2; 
arr[2] = 3; 
arr[3] = 4; 
arr[99] = 100; 

console.log(arr.length);
console.log(arr);

const names = [
    "Samiuzzaman",
    "Rifat Chowdhury",
    "Sifat Chowdhury",
    "Penu Peyash",
    "Famida Jerin",
];
// names[5] = "Sabera Bithi";
names[names.length] = "Bithi";
names[names.length] = "Mily";

console.log(names.length);
console.log(names);