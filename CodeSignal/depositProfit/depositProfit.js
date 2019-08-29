function depositProfit(deposit, rate, threshold, time = 0) {
  if (deposit >= threshold) return time;
  const newAmt = deposit * (1 + rate / 100);
  return depositProfit(newAmt, rate, threshold, ++time);
}

console.log(depositProfit(100, 20, 170));
console.log(depositProfit(80, 70, 170));
console.log(depositProfit(1000, 40, 5070));
