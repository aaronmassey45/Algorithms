function rotateImage(a) {
  if (a.length === 1) return a;

  const rotatedArray = new Array(a.length);
  for (let x = 0; x < a.length; x++) {
    rotatedArray[x] = new Array(a.length);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      rotatedArray[i][j] = a[a.length - 1 - j][i];
    }
  }

  return rotatedArray;
}

console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(
  rotateImage([
    [10, 9, 6, 3, 7],
    [6, 10, 2, 9, 7],
    [7, 6, 3, 8, 2],
    [8, 9, 7, 9, 9],
    [6, 8, 6, 8, 2],
  ])
);
console.log(rotateImage([[1]]));
