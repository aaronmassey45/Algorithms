function frankenSplice(arr1, arr2, n) {
  const copy1 = arr1.slice();
  const copy2 = arr2.slice();
  copy2.splice(n, 0, ...copy1);
  return copy2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); //Should return [4,1,2,3,5,6]
console.log(frankenSplice([1, 2], ['a', 'b'], 1)); //Should return ["a", 1, 2, "b"]
console.log(
  //Should return
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
); //Should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
