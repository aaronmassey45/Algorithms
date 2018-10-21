function alphabeticShift(inputString) {
  let str = '';
  for (let char of inputString) {
    const newChar = char.charCodeAt() + 1 < 123 ? char.charCodeAt() + 1 : 97;
    str += String.fromCharCode(newChar);
  }
  return str;
  // return inputString
  //   .split('')
  //   .map(char => {
  //     const newChar =
  //       char.charCodeAt(0) + 1 < 123 ? char.charCodeAt(0) + 1 : 97;
  //     return String.fromCharCode(newChar);
  //   })
  //   .join('');
}

module.exports = alphabeticShift;
