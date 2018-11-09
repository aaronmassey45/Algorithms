const tennisSet = (score1, score2) => {
  if (score1 === score2) return false;

  const maxScore = score1 > score2 ? score1 : score2;
  const minScore = maxScore === score1 ? score2 : score1;

  return (maxScore === 6 && minScore < 5) || (maxScore === 7 && minScore > 4);
};

module.exports = tennisSet;
