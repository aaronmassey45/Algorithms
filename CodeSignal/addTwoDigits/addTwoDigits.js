function addTwoDigits(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, val) => parseInt(acc) + parseInt(val));
}
