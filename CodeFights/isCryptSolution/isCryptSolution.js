function isCryptSolution(crypt, solution) {
  const obj = solution.reduce((acc, currentValue, i) => {
    acc[currentValue[0]] = currentValue[1];
    return acc;
  }, {});

  const arr = crypt.map(word => {
    return word
      .split('')
      .map(letter => {
        return obj[letter];
      })
      .join('');
  });

  const encoded = arr.map(number => parseInt(number));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== encoded[i].toString()) return false;
  }

  return encoded[0] + encoded[1] === encoded[2];
}

console.log(
  isCryptSolution(
    ['SEND', 'MORE', 'MONEY'],
    [
      ['O', '0'],
      ['M', '1'],
      ['Y', '2'],
      ['E', '5'],
      ['N', '6'],
      ['D', '7'],
      ['R', '8'],
      ['S', '9'],
    ]
  )
);

console.log(
  isCryptSolution(
    ['TEN', 'TWO', 'ONE'],
    [['O', '1'], ['T', '0'], ['W', '9'], ['E', '5'], ['N', '4']]
  )
);

console.log(isCryptSolution(['A', 'A', 'A'], [['A', '0']]));

console.log(isCryptSolution(['AA', 'AA', 'AA'], [['A', '0']]));
