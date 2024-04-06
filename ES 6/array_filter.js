const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter((value, index, array) => {
    console.log(index);
    console.log(array);
    return value > 4;
});

// console.log(result);
