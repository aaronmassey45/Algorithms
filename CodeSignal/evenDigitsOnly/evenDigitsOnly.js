function evenDigitsOnly(n) {
  n = n.toString();
  return n.split('').filter(val => val % 2 === 0).length === n.length;
}

console.log(evenDigitsOnly(234567));
console.log(evenDigitsOnly(246624));
console.log(evenDigitsOnly(646));
