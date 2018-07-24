function alphabeticShift(inputString) {
  return inputString
    .split('')
    .map(char => {
      const newChar =
        char.charCodeAt(0) + 1 < 123 ? char.charCodeAt(0) + 1 : 97;
      return String.fromCharCode(newChar);
    })
    .join('');
}

console.log(alphabeticShift('crazy'));
