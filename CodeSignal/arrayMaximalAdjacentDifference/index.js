const arrayMaximalAdjacentDifference = inputArray => {
  let max = 0;
  inputArray.forEach((num, i) => {
    if (inputArray[i + 1]) {
      const difference = Math.abs(num - inputArray[i + 1]);
      if (difference > max) max = difference;
    }
  });
  return max;
};
