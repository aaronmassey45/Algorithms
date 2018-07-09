function extraNumber(a, b, c) {
  if (a === b) return c;
  return a === c ? b : a;
}

console.log(extraNumber(2, 7, 2));
console.log(extraNumber(5, 5, 8));
console.log(extraNumber(4, 127, 127));
