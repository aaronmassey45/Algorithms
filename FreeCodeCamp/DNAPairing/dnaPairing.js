function pairElement(str) {
  return str.split('').map(element => {
    switch (element) {
      case 'A':
        return ['A', 'T'];
        break;
      case 'T':
        return ['T', 'A'];
        break;
      case 'C':
        return ['C', 'G'];
        break;
      case 'G':
        return ['G', 'C'];
        break;
      default:
        break;
    }
  });
}

console.log(pairElement('GCG'));
