const arrayChange = inputArray => {
  let changes = 0;

  for (let i = 0; i < inputArray.length; i++) {
    while (inputArray[i + 1] <= inputArray[i]) {
      changes++;
      inputArray[i + 1]++;
    }
  }
  return changes;
};

module.exports = arrayChange;
