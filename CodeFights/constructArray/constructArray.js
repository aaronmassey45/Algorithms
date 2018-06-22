function constructArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    if (!array.includes(i + 1)) array.push(i + 1);
    if (!array.includes(size - i)) array.push(size - i);
  }
  return array;
}

console.log(constructArray(4))
console.log(constructArray(7))
console.log(constructArray(15))