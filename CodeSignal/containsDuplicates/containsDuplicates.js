function containsDuplicates(a) {
  try {
    a.reduce((acc, currentValue, i) => {
      if (acc[currentValue]) throw new Error();
      acc[currentValue] = true;
      return acc;
    }, {});
    return false;
  } catch (error) {
    return true;
  }
}

console.log(containsDuplicates([1, 2, 3, 1])); //true
console.log(containsDuplicates([0, 4, 5, 0, 3, 6])); //true
console.log(containsDuplicates([1, 2, 3, 4])); //false
