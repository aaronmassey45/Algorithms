function alternatingSums(a) {
  if (a.length === 1) return [...a, 0];
  if (a.length === 2) return a;

  const teams = { a: [], b: [] };
  a.forEach((weight, i) => {
    i % 2 === 0 ? teams.a.push(weight) : teams.b.push(weight);
  });

  Object.keys(teams).forEach(key => {
    teams[key] = teams[key].reduce((acc, val) => acc + val);
  });

  return Object.values(teams);
}

module.exports = alternatingSums;
