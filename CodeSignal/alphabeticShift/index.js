function alphabeticShift(inputString) {
  let str = '';
  for (let char of inputString) {
    const newChar = char.charCodeAt() + 1 < 123 ? char.charCodeAt() + 1 : 97;
    str += String.fromCharCode(newChar);
  }
  return str;
}

module.exports = alphabeticShift;
