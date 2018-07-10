const isInfiniteProcess = (a, b) => !(b >= a && a % 2 === b % 2);

console.log(isInfiniteProcess(10, 10));
console.log(isInfiniteProcess(5, 10));
