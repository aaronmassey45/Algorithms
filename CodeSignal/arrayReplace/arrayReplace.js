function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return Object.values(
    inputArray.reduce((acc, currentValue, i) => {
      acc[i] = currentValue === elemToReplace ? substitutionElem : currentValue;
      return acc;
    }, {})
  );
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([1, 2, 1, 2, 1], 2, 1));
console.log(arrayReplace([3, 1], 3, 9));
