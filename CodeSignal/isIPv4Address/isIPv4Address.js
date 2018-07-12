function isIPv4Address(inputString) {
  if ((inputString.match(/\./g) || []).length !== 3) return false;
  return (
    inputString.split('.').filter(x => {
      if (x > -1 && x < 256) return x;
    }).length === 4
  );
}

console.log(isIPv4Address('123.5.6.789'));
console.log(isIPv4Address('4.5.6.7'));
console.log(isIPv4Address('.as.54.72.123'));
console.log(isIPv4Address('1.1..1.1.'));
