function firstNotRepeatingCharacter(s) {
  if (s.length === 1) return s;

  const chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (chars.indexOf(char) === chars.lastIndexOf(char)) return char;
  }

  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(
  firstNotRepeatingCharacter(
    'ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof'
  )
);
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
