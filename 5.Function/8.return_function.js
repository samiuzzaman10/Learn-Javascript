function returnIsEven() {
  const isEven = (n) => n % 2 == 0;
  return isEven;
}

console.log(returnIsEven()(99));