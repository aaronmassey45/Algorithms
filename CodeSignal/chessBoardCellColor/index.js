function chessBoardCellColor(cell1, cell2) {
  if (cell1 === cell2) return true;

  const charDiff = Math.abs((cell1.charCodeAt() - cell2.charCodeAt()) % 2);
  const numDiff = Math.abs((cell1.substr(-1) - cell2.substr(-1)) % 2);

  return charDiff === numDiff;
}

module.exports = chessBoardCellColor;
