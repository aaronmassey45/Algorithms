function variableName(name) {
  return /([a-zA-Z_])/.test(name.charAt(0)) && !/\W/.test(name);
}

console.log(variableName('var_1__Int'));
console.log(variableName('qq-q'));
console.log(variableName('2w2'));
