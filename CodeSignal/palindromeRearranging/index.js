function palindromeRearranging(inputString) {
  const dict = {};
  let singles = 0;

  for (const char of inputString) {
    dict[char] = ++dict[char] || 1;
  }

  for (const char in dict) {
    if (dict[char] % 2 !== 0) {
      singles++;
    }
    if (singles > 1) return false;
  }

  return true;
}

module.exports = palindromeRearranging;
