function isInfiniteProcess(a, b) {
  return b >= a && a % 2 === b % 2 ? false : true;
}

console.log(isInfiniteProcess(10, 10));
console.log(isInfiniteProcess(5, 10));
