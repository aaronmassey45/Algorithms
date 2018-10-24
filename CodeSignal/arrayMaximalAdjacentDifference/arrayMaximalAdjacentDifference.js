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

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]));
console.log(arrayMaximalAdjacentDifference([-1, 1, -3, -4]));
