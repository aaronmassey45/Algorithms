function fiboEvenSum(n) {
  const fibs = [1, 2];
  let sum = 2;

  for (let i = 2; i <= n; i++) {
    const nextNum = fibs[i - 1] + fibs[i - 2];
    fibs.push(nextNum);
    if (fibs[i] % 2 === 0) sum += fibs[i];
  }
  return sum;
}

module.exports = fiboEvenSum;
