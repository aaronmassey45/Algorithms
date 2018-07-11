function phoneCall(min1, min2_10, min11, s) {
  if (s === min1) return 1;
  if (s < min1) return 0;

  let count = 1;
  let amount = min2_10;

  s -= min1;
  while (s >= amount) {
    count++;
    if (count > 10 && amount !== min11) amount = min11;
    s -= amount;
  }

  return count;
}

console.log(phoneCall(3, 1, 2, 20));
console.log(phoneCall(2, 2, 1, 2));
console.log(phoneCall(1, 2, 1, 6));
