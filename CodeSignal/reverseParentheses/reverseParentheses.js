function reverseParentheses(s) {
  const regex = /\(([^()]+)\)/;
  while (s.match(regex)) {
    const reversed = s
      .match(regex)[1]
      .split('')
      .reverse()
      .join('');
    s = s.replace(regex, reversed);
  }
  return s;
}

console.log(reverseParentheses('a(bcdefghijkl(mno)p)q'));
console.log(reverseParentheses('a(bc)de'));
