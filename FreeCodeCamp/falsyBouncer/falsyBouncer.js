function bouncer(arr) {
  return arr.filter(value => !!value);
}

console.log(bouncer([7, 'ate', '', false, 9]));
