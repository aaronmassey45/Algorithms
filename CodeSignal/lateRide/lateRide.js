function lateRide(n) {
  if (n < 10) return n;
  const hours = Math.floor(n / 60);
  const min = n - hours * 60;
  return `${hours}${min}`
    .split('')
    .reduce((total, acc) => parseInt(total) + parseInt(acc));
}

console.log(lateRide(80));
