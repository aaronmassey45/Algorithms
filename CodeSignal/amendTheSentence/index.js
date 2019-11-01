function amendTheSentence(s) {
  let sentence = '';

  for (let char of s) {
    if (char.charCodeAt() < 91) {
      sentence += sentence.length
        ? ' ' + char.toLowerCase()
        : char.toLowerCase();
    } else {
      sentence += char;
    }
  }

  return sentence;
}

module.exports = amendTheSentence;
