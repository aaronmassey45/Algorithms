function arithmeticExpression(a, b, c) {
  return a + b === c || a - b === c || a * b === c || a / b === c;
}

console.log(arithmeticExpression(2, 4, 8));
console.log(arithmeticExpression(8, 2, 6));
console.log(arithmeticExpression(1, 7, 9));
